import { Accordion } from '@/ui'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

// ✅ mock the CSS module so tests don’t choke on class names
vi.mock('./Accordion.module.scss', () => ({
  default: {
    accordion: 'accordion',
    header: 'header',
    content: 'content',
  },
}))

// ✅ mock Label to keep the test focused (renders text only)
vi.mock('../Label/Label', () => ({
  Label: ({ label }: { label: string }) => <span>{label}</span>,
}))

// ✅ mock Button so we can assert which icon the Accordion passes
vi.mock('../Button/Button', () => ({
  Button: (props: any) => (
    <button aria-label='accordion-button' data-icon={props.iconLeft}>
      {props.children}
    </button>
  ),
}))

describe('Accordion', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders collapsed by default (content hidden)', () => {
    render(<Accordion title='Title' content={<div>Body</div>} />)

    // title visible
    expect(screen.getByText('Title')).toBeInTheDocument()

    // content is not rendered when collapsed
    expect(screen.queryByText('Body')).not.toBeInTheDocument()
  })

  it('renders expanded when isExpanded=true', () => {
    render(<Accordion title='Hello' content={<div>World</div>} isExpanded />)
    expect(screen.getByText('World')).toBeInTheDocument()
  })

  it('calls onExpand with the next expanded state', () => {
    const onExpand = vi.fn()
    render(<Accordion title='T' content='C' onExpand={onExpand} />)
    const header = screen.getByTestId('accordion-header') as HTMLElement

    // first click: expands → onExpand(true)
    fireEvent.click(header)
    expect(onExpand).toHaveBeenCalledWith(true)

    // second click: collapses → onExpand(false)
    fireEvent.click(header)
    expect(onExpand).toHaveBeenCalledWith(false)
  })

  it('reacts to external prop changes (controlled behavior)', () => {
    const { rerender } = render(<Accordion title='T' content='C' isExpanded={false} />)
    expect(screen.queryByText('C')).not.toBeInTheDocument()

    // parent “opens” it
    rerender(<Accordion title='T' content='C' isExpanded={true} />)
    expect(screen.getByText('C')).toBeInTheDocument()

    // parent “closes” it
    rerender(<Accordion title='T' content='C' isExpanded={false} />)
    expect(screen.queryByText('C')).not.toBeInTheDocument()
  })
})
