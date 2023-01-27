import { Keyboard } from 'react-native'

import useKeyboardStatus from '@src/hooks/useKeyboardStatus'

const useAuthForm = () => {
  const { isKeyboardVisible } = useKeyboardStatus()

  const showInfo = !isKeyboardVisible
  const hideHeader = isKeyboardVisible
  const removePadding = isKeyboardVisible ? 'pb-0' : undefined

  const onArrowClick = isKeyboardVisible ? Keyboard.dismiss : undefined
  const nav = { arrow: true, onArrowClick }

  return { nav, hideHeader, showInfo, removePadding }
}

export default useAuthForm
