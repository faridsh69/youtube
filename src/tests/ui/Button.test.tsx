// mock the Loader which Button imports from the ui barrel
// import enums directly (avoid hoisting issues when mocking '@/ui')
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Button } from '../../ui/components/Button/Button'
import { IconsEnum } from '../../ui/enums/enums'

// mock the CSS module used by the component (resolved relative to the component file)
vi.mock('../../ui/components/Button/Button.module.scss', () => ({
  default: {
    button: 'button',
    'size-m': 'size-m',
    'variant-primary': 'variant-primary',
    'active-primary': 'active-primary',
    disabled: 'disabled',
    'noBorderRadius-undefined': 'noBorderRadius-undefined',
    'noBorderRadius-0': 'noBorderRadius-0',
    'noBorderRadius-1': 'noBorderRadius-1',
    'noBorderRadius-2': 'noBorderRadius-2',
    'noBorderRadius-3': 'noBorderRadius-3',
    'font-undefined': 'font-undefined',
    noHover: 'noHover',
  },
}))

// mock the Icon so tests are focused and predictable (resolved relative to component)
vi.mock('../../ui/components/Icon/Icon', () => ({
  Icon: (props: any) => (
    <span data-testid='icon' data-icon={props.icon}>
      icon
    </span>
  ),
}))

// mock the Loader which Button imports from the ui barrel — use async factory
// so we can reuse the real module and only replace Loader with a small stub.
// mock the Loader which Button imports from the ui barrel — use async factory
// so we can reuse the real ui barrel and only replace Loader with a small stub.
vi.mock('@/ui', async () => {
  const actual = await vi.importActual('../../ui/index')
  return {
    ...actual,
    Loader: () => <span data-testid='loader' />,
  }
})

describe('Button', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the provided label', () => {
    render(<Button label='Click me' />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked and not disabled', () => {
    const onClick = vi.fn()
    render(<Button label='OK' onClick={onClick} />)
    fireEvent.click(screen.getByText('OK'))
    expect(onClick).toHaveBeenCalled()
  })

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn()
    render(<Button label='No' onClick={onClick} disabled />)
    const btn = screen.getByText('No').closest('button') as HTMLButtonElement
    expect(btn).toBeDisabled()
    fireEvent.click(btn)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders iconLeft and sets data-icon on button', () => {
    render(<Button label='WithIcon' iconLeft={IconsEnum.Check} />)
    // Icon mock renders an element with data-testid="icon"
    expect(screen.getByTestId('icon')).toBeInTheDocument()

    // button should have data-icon attribute equal to passed iconLeft
    const btn = screen.getByText('WithIcon').closest('button') as HTMLElement
    expect(btn.getAttribute('data-icon')).toBe('check')
  })

  it('renders Loader when isLoading is true', () => {
    render(<Button label='L' isLoading />)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('applies inline width style when width prop is provided', () => {
    render(<Button label='W' width='120px' />)
    const btn = screen.getByText('W').closest('button') as HTMLElement
    expect(btn.style.width).toBe('120px')
  })
})
