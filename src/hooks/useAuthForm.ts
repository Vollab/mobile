import { Keyboard } from 'react-native'

import useKeyboardStatus from '@src/hooks/useKeyboardStatus'

interface IUseAuthFormParams {
  onBackButtonClick?: any
}

const useAuthForm = ({ onBackButtonClick }: IUseAuthFormParams) => {
  const { isKeyboardVisible } = useKeyboardStatus()

  const showInfo = !isKeyboardVisible
  const hideHeader = isKeyboardVisible
  const removePadding = isKeyboardVisible ? 'pb-0' : undefined

  const onArrowClick = isKeyboardVisible ? Keyboard.dismiss : onBackButtonClick
  const nav = { arrow: true, onArrowClick }

  return { nav, hideHeader, showInfo, removePadding }
}

export default useAuthForm
