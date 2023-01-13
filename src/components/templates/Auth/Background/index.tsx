import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

import bg from '@assets/bg.png'
import { styled } from 'nativewind'

const FormBackgroundComponent = () => (
  <View
    style={styles.bgRounded}
    className={`absolute top-full -z-10 bg-secondary-500 ${
      Platform.OS === 'web' ? '-translate-y-64' : '-translate-y-52'
    }`}
  />
)

const BackgroundComponent = () => (
  <Image source={bg as any} className='absolute w-full h-full -z-10' />
)

const styles = StyleSheet.create({
  bgRounded: {
    height: 800,
    borderRadius: 400,
    width:
      Platform.OS === 'web'
        ? '180vw'
        : Dimensions.get('screen').width * 1.8 + StatusBar.currentHeight * 2
  }
})

export const Background = styled(BackgroundComponent)
export const FormBackground = styled(FormBackgroundComponent)
