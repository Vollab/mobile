import Form from './Footer'
import Header from './Header'

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

import AppBackground from '@src/components/molecules/Backgrounds/AppBackground'
import FormBackground from '@src/components/molecules/Backgrounds/FormBackground'

import React from 'react'

export default function Auth() {
  return (
    <>
      <StatusBar backgroundColor='transparent' translucent />

      <SafeAreaView
        style={styles.container}
        className='flex-1 flex-col items-center overflow-hidden'
      >
        <AppBackground />
        <FormBackground />

        <Header />
        <Form />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: { paddingTop: StatusBar.currentHeight }
})
