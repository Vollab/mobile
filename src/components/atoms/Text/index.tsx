import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  useFonts
} from '@expo-google-fonts/open-sans'
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle
} from 'react-native'

import fontSize from '@src/styles/custom/fontSize'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { styled } from 'nativewind'

interface ITextProps extends RNTextProps {
  size?: keyof typeof fontSize
}

const Text = ({ style, children, size = 'base', ...props }: ITextProps) => {
  const { moderateScale } = useResponsiveScale()

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic
  })

  if (!fontsLoaded) return null

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

  return (
    <RNText style={[style, responsiveFontSize]} tw='font-body' {...props}>
      {children}
    </RNText>
  )
}

export default styled(Text)
