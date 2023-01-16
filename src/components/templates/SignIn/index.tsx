import Footer from './Footer'
import Header from './Header'

import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native'

import AppBackground from '@src/components/molecules/Backgrounds/AppBackground'
import FormBackground from '@src/components/molecules/Backgrounds/FormBackground'

import { RootStackScreen } from 'App'
import React from 'react'

export default function SignIn({ navigation }: RootStackScreen<'SignIn'>) {
  return (
    <>
      <StatusBar backgroundColor='transparent' translucent />

      <SafeAreaView
        style={styles.container}
        className='flex-1 flex-col items-center overflow-hidden'
      >
        <AppBackground />

        <FormBackground translateY={{ mobile: '-translate-y-80' }} />

        <Header
          onArrowPress={() => {
            navigation.goBack()
          }}
        />

        <Footer />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: { paddingTop: StatusBar.currentHeight }
})
