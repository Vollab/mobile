import { Image, Platform } from 'react-native'

import { phoneHeight } from '@src/utils/dimensions'

import bg from '@assets/bg.png'
import { styled } from 'nativewind'

const AppBackground = () => (
  <Image
    source={bg as any}
    tw='absolute w-full h-full -z-20'
    style={{
      height: Platform.OS == 'web' ? String(phoneHeight()) : phoneHeight()
    }}
  />
)

export default styled(AppBackground)
