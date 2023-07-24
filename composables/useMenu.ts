const closeRef = ref(() => {})

const initClose = (close: () => void) => (closeRef.value = close)

export const useMenu = () => {
  const closeMenu = () => closeRef.value()
  const toPage = (navigate: () => void) => {
    navigate()
    closeMenu()
  }
  return { initClose, closeMenu, toPage }
}
