import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  useFonts
} from '@expo-google-fonts/open-sans'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import { styled } from 'nativewind'

interface ITextProps extends RNTextProps {
  variant?: 'regular' | 'semibold'
}

const Text = ({ children, variant = 'regular', ...props }: ITextProps) => {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic
  })

  if (!fontsLoaded) return null

  return (
    <RNText className='font-body text-base' {...props}>
      {children}
    </RNText>
  )
}

export default styled(Text)
