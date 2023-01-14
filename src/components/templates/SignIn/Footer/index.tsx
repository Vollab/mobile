import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'

import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'
import GoogleButton from '@src/components/molecules/GoogleButton'

import Checkbox from 'expo-checkbox'

export default function Footer() {
  return (
    <View className='w-full h-96 flex px-8 py-6 items-center'>
      <Field placeholder='E-mail' className='mb-3' />

      <Field placeholder='Senha' className='mb-3' />

      <TouchableOpacity className='flex flex-row items-center mb-3'>
        <Checkbox className='mr-4' />
        <Text className='text-sm'>Lembrar senha</Text>
      </TouchableOpacity>

      <Button className='mb-3'>Entrar</Button>

      <TouchableOpacity className='mb-3'>
        <Text className='text-sm'>Esqueci minha senha</Text>
      </TouchableOpacity>

      <GoogleButton className='mt-auto' />
    </View>
  )
}
