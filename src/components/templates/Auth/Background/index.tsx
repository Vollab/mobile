import { Dimensions, Image, StatusBar, StyleSheet, View } from 'react-native'

import bg from '@assets/bg.png'
import { styled } from 'nativewind'

const FormBackgroundComponent = () => (
  <View
    className='absolute top-full -z-10 bg-white -translate-y-96'
    style={styles.bgRounded}
  />
)

const BackgroundComponent = () => (
  <Image source={bg as any} className='absolute w-full h-full -z-10' />
)

const styles = StyleSheet.create({
  bgRounded: {
    height: 800,
    borderRadius: 400,
    width: Dimensions.get('screen').width * 1.8 + StatusBar.currentHeight * 2
  }
})

export const Background = styled(BackgroundComponent)
export const FormBackground = styled(FormBackgroundComponent)
