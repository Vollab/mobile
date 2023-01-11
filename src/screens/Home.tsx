import { SafeAreaView, StatusBar } from 'react-native'

import theme from '@src/styles/theme'

import MyText from '@src/components/atoms/MyText'

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor={theme.primary[500]} />

      <SafeAreaView className='flex-1 flex-col items-center justify-center bg-primary-500'>
        <MyText content='Vollab' className='text-white' />
      </SafeAreaView>
    </>
  )
}
