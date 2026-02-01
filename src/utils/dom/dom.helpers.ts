export const scrollPageToTop = () => {
  window.scrollTo({ top: 300, behavior: 'smooth' })
}

export const refreshBrowser = () => {
  setTimeout(() => {
    window.location.reload()
  }, 0)
}
