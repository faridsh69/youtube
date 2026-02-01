import { APP_LS_KEY } from '@/utils/localstorage/constants/localstorage.constants'
import * as lsHelpers from '@/utils/localstorage/helpers/localstorage.helpers'
import { usePersistState } from '@/utils/react/usePersistState'
import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('usePersistState', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initializes state from getLs', () => {
    // mock getLs to return some value
    const getLsSpy = vi.spyOn(lsHelpers, 'getLs').mockReturnValue('stored')

    const { result } = renderHook(() => usePersistState('key', 'default'))

    expect(getLsSpy).toHaveBeenCalledWith('key', 'default', APP_LS_KEY)
    expect(result.current[0]).toBe('stored')
  })

  it('updates value and calls setLs when state changes', () => {
    vi.spyOn(lsHelpers, 'getLs').mockReturnValue('initial')
    const setLsSpy = vi.spyOn(lsHelpers, 'setLs').mockImplementation(() => {})

    const { result } = renderHook(() => usePersistState('theme', 'light'))

    // act: update state
    act(() => {
      result.current[1]('dark')
    })

    expect(result.current[0]).toBe('dark')
    expect(setLsSpy).toHaveBeenCalledWith('theme', 'dark', APP_LS_KEY)
  })

  it('persists with custom appLsKey', () => {
    vi.spyOn(lsHelpers, 'getLs').mockReturnValue('blue')
    const setLsSpy = vi.spyOn(lsHelpers, 'setLs').mockImplementation(() => {})

    const customKey = 'MY_APP'
    const { result } = renderHook(() => usePersistState('color', 'red', customKey))

    act(() => {
      result.current[1]('green')
    })

    expect(setLsSpy).toHaveBeenCalledWith('color', 'green', customKey)
  })
})
