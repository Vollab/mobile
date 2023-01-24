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

export default function CandidateSignUp({
  navigation
}: RootStackScreen<'CandidateSignUp'>) {
  return (
    <>
      <StatusBar backgroundColor='transparent' translucent />

      <SafeAreaView
        style={styles.container}
        className='flex flex-1 flex-col items-center overflow-hidden'
      >
        <AppBackground />

        <FormBackground translateY={{ mobile: '-translate-y-129' }} />

        <Header
          onArrowPress={() => {
            navigation.goBack()
          }}
        />

        <Footer navigation={navigation} />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: { paddingTop: StatusBar.currentHeight }
})
