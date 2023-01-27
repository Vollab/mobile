import { Image } from 'react-native'

import phoneHeight from '@src/utils/Dimensions'

import bg from '@assets/bg.png'
import { styled } from 'nativewind'

const AppBackground = () => (
  <Image
    source={bg as any}
    style={{ height: phoneHeight }}
    className='absolute w-full h-full -z-20'
  />
)

export default styled(AppBackground)
