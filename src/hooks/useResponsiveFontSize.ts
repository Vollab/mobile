import useResponsiveScale from './useResponsiveScale'

import { StyleProp, TextStyle } from 'react-native'

import fontSize from '@src/styles/custom/fontSize'
import { TFontSize } from '@src/styles/types'

const useResponsiveFontSize = (size: TFontSize) => {
  const { responsiveScale } = useResponsiveScale()

  const responsiveFontSize: StyleProp<TextStyle> = {
    fontSize: responsiveScale({ size: fontSize[size][0] }),
    lineHeight: responsiveScale({ size: fontSize[size][1] })
  }

  return responsiveFontSize
}

export default useResponsiveFontSize
