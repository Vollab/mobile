import useResponsiveScale from './useResponsiveScale'

import { StyleProp, TextStyle } from 'react-native'

import fontSize from '@src/styles/custom/fontSize'
import { TFontSize } from '@src/styles/types'

const useResponsiveFontSize = (size: TFontSize) => {
  const { moderateScale } = useResponsiveScale()
  const responsiveFontSize: StyleProp<TextStyle> = {
    fontSize: moderateScale({
      size: fontSize[size][0],
      max: 1.2,
      min: 0.7
    }),
    lineHeight: moderateScale({
      size: fontSize[size][1],
      max: 1.3,
      min: 0.7
    })
  }

  return responsiveFontSize
}

export default useResponsiveFontSize
