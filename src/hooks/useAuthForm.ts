import { Keyboard } from 'react-native'

import useKeyboardStatus from '@src/hooks/useKeyboardStatus'

const useAuthForm = () => {
  const { isKeyboardVisible } = useKeyboardStatus()

  const showInfo = !isKeyboardVisible
  const hideHeader = isKeyboardVisible
  const showSubmit = !isKeyboardVisible
  const className = isKeyboardVisible ? 'pb-0' : undefined
  const onArrowClick = isKeyboardVisible ? Keyboard.dismiss : undefined
  const nav = { arrow: true, onArrowClick }

  return { nav, hideHeader, showInfo, showSubmit, className }
}

export default useAuthForm
