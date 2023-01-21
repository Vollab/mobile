import { View } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

import { styled } from 'nativewind'
import * as React from 'react'

const UserIcon = ({ fill, ...props }: SvgProps) => (
  <View {...props}>
    <Svg viewBox='0 0 51 51' fill={fill}>
      <Path d='M50.579 47.284c-3.603-6.37-9.37-11.151-16.196-13.426 3.271-1.997 5.814-5.041 7.237-8.665a18.276 18.276 0 00.638-11.393c-1.01-3.767-3.195-7.09-6.223-9.458A17.091 17.091 0 0025.5.692a17.091 17.091 0 00-10.535 3.65C11.937 6.71 9.75 10.033 8.743 13.8a18.276 18.276 0 00.637 11.393c1.423 3.624 3.966 6.668 7.237 8.665C9.793 36.133 4.024 40.913.421 47.284a2.01 2.01 0 00-.294 1.559c.058.267.17.518.327.738.158.22.358.405.589.542a1.896 1.896 0 001.537.18c.255-.081.49-.215.692-.393.201-.179.365-.398.48-.644a25.466 25.466 0 019.196-9.423A24.634 24.634 0 0125.5 36.395c4.406 0 8.735 1.189 12.553 3.448a25.466 25.466 0 019.195 9.423c.115.246.279.465.48.644.202.178.438.312.692.392a1.884 1.884 0 001.538-.179c.23-.137.43-.321.588-.542a2.009 2.009 0 00.339-1.55 2.01 2.01 0 00-.306-.747zM11.983 18.548c0-2.743.793-5.425 2.278-7.707a13.599 13.599 0 016.066-5.109 13.196 13.196 0 017.81-.79 13.414 13.414 0 016.921 3.797 13.988 13.988 0 013.7 7.103 14.21 14.21 0 01-.77 8.015 13.8 13.8 0 01-4.978 6.226 13.272 13.272 0 01-7.51 2.338c-3.585 0-7.023-1.462-9.558-4.063-2.535-2.602-3.959-6.13-3.959-9.81z' />
    </Svg>
  </View>
)

export default styled(UserIcon)
