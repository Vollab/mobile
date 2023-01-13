import { Background, FormBackground } from './Background'
import Form from './Form'
import Header from './Header'

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

export default function Auth() {
  return (
    <>
      <StatusBar backgroundColor='transparent' translucent />

      <SafeAreaView
        style={styles.container}
        className='flex-1 flex-col items-center overflow-hidden'
      >
        <Background />
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
