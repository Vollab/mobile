import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'

import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import Checkbox from 'expo-checkbox'

export default function Footer() {
  return (
    <View className='w-full h-80'>
      <KeyboardAvoidingView
        behavior='padding'
        className=' relative z-20 w-full h-full flex px-8 justify-center items-center'
      >
        <Field placeholder='E-mail' className='mb-4' />

        <Field placeholder='Senha' className='mb-4' />

        <TouchableOpacity className='flex flex-row items-center mb-4'>
          <Checkbox className='mr-4' />
          <Text className='text-sm'>Lembrar senha</Text>
        </TouchableOpacity>

        <Button className='mb-3'>Entrar</Button>

        <TouchableOpacity className='mb-3'>
          <Text className='text-sm'>Esqueci minha senha</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}
