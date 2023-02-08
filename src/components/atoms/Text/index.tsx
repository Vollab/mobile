import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  useFonts
} from '@expo-google-fonts/open-sans'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import fontSize from '@src/styles/custom/fontSize'

import { moderateScale } from '@src/utils/scale'

import { styled } from 'nativewind'

interface ITextProps extends RNTextProps {
  size?: keyof typeof fontSize
}

const Text = ({ style, children, size = 'base', ...props }: ITextProps) => {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <RNText
      tw='font-body'
      style={[{ fontSize: moderateScale(fontSize[size][0]) }, style]}
      {...props}
    >
      {children}
    </RNText>
  )
}

export default styled(Text)
