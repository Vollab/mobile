import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native'

import { styled } from 'nativewind'

interface IFormBackground {
  translateY?: {
    web?: string
    mobile?: string
  }
}

const FormBackground = ({ translateY }: IFormBackground) => {
  const translateTop =
    Platform.OS === 'web'
      ? translateY?.web || `-translate-y-64`
      : translateY?.mobile || `-translate-y-52`

  return (
    <View
      style={styles.bg}
      className={`absolute z-10 top-full bg-secondary-500 ${translateTop}`}
    />
  )
}

const styles = StyleSheet.create({
  bg: {
    height: 800,
    borderRadius: 400,
    width:
      Platform.OS === 'web'
        ? '180vw'
        : Dimensions.get('screen').width * 1.8 + StatusBar.currentHeight * 2
  }
})

export default styled(FormBackground)
