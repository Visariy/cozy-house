export const useModal = (key?: string, initialStatus: boolean = false) => {
    key ??= uuid()

    const visible = useState(`NUXT_MODAL_${key}`, () => initialStatus)
    const toggle = (value?: boolean) => {
      if (typeof value === 'undefined') {
        visible.value = !visible.value
      } else {
        visible.value = value
      }
    }
    const open = () => toggle(true)
    const close = () => toggle(false)
  
    return { visible, open, close, toggle }
  }
  
  function uuid(length: number = 30) {
    let string = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      string += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return string
}