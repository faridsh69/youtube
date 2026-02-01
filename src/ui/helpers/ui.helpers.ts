import { BreakpointsEnum } from '../enums/enums'

export const getItemsCountPerRow = (copilotVisible = false) => {
  try {
    const width = typeof window !== 'undefined' ? window?.innerWidth : 1241

    if (width > getBreakpointPixels(BreakpointsEnum.Xl))
      return getCountBasedOnCopilot(5, copilotVisible)
    if (width > getBreakpointPixels(BreakpointsEnum.Lg))
      return getCountBasedOnCopilot(4, copilotVisible)
    if (width > getBreakpointPixels(BreakpointsEnum.Md))
      return getCountBasedOnCopilot(3, copilotVisible)
    if (width > getBreakpointPixels(BreakpointsEnum.Sm))
      return getCountBasedOnCopilot(2, copilotVisible)

    return 1
  } catch {
    return 5
  }
}

const getCountBasedOnCopilot = (count: number, copilotVisible: boolean) => {
  return copilotVisible ? count - 1 : count
}

const getBreakpointPixels = (breakpoint: BreakpointsEnum) => {
  return parseInt(breakpoint.replace('px', ''))
}

export const getUniqueId = (): string => {
  const randomNumber = Math.floor(Math.random() * 1000) + 1

  return 'RAND:' + Date.now() + randomNumber
}

export const downloadImage = (src: string, fileName: string) => {
  const link = document.createElement('a')

  link.target = '_blank'
  link.href = src
  link.download = fileName
  link.click()
}

export const getBase64Image = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      resolve(reader.result as string)
    }

    reader.onerror = error => {
      reject(error)
    }
  })
}
