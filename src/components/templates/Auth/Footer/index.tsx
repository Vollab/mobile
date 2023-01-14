import { View } from 'react-native'

import Button from '@src/components/molecules/Button'
import GoogleButton from '@src/components/molecules/GoogleButton'

export default function Footer() {
  return (
    <View className='w-full h-64 flex px-14 items-center justify-center'>
      <Button variant='secondary'>Entrar</Button>

      <Button className='mt-6'>Cadastrar</Button>

      <GoogleButton />
    </View>
  )
}
