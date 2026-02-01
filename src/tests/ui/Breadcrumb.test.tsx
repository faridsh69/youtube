import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Breadcrumb } from '../../ui/components/Breadcrumb/Breadcrumb'

// mock the CSS module used by the Breadcrumb component
vi.mock('../../ui/components/Breadcrumb/Breadcrumb.module.scss', () => ({
  default: {
    breadcrumb: 'breadcrumb',
    breadcrumbItem: 'breadcrumbItem',
  },
}))

// mock Label component used by Breadcrumb
vi.mock('../../ui/components/Label/Label', () => ({
  Label: ({ label }: { label: string }) => <span>{label}</span>,
}))

// mock next/link to render children inside an <a> so we can assert link presence
vi.mock('next/link', () => ({
  default: ({ children }: any) => <a>{children}</a>,
}))

describe('Breadcrumb', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders non-last options as links and last option as plain label', () => {
    const options = [
      { href: '/a', label: 'first' },
      { href: '/b', label: 'second' },
    ]

    render(<Breadcrumb options={options} />)

    // Title-casing is applied in the component; Label mock just renders the passed text.
    // Breadcrumb uses getTitleCase so labels are capitalized
    expect(screen.getByText('Second')).toBeInTheDocument()

    // The first item should be wrapped in an anchor (via mocked next/link)
    const firstAnchor = screen.getByText('First').closest('a')
    expect(firstAnchor).toBeInTheDocument()

    // The last item should not be a link
    const secondAnchor = screen.getByText('Second').closest('a')
    expect(secondAnchor).toBeNull()
  })

  it('renders separators between items', () => {
    const options = [
      { href: '/a', label: 'one' },
      { href: '/b', label: 'two' },
      { href: '/c', label: 'three' },
    ]

    render(<Breadcrumb options={options} />)

    // There should be options.length - 1 separator elements with text '/'
    const separators = screen.getAllByText('/')
    expect(separators).toHaveLength(options.length - 1)
  })
})
