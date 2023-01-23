import { KeyboardAvoidingView, View } from 'react-native'

import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

export default function Footer() {
  return (
    <View className='w-full h-129'>
      <KeyboardAvoidingView
        behavior='padding'
        className='relative z-20 w-full h-full px-8 flex flex-col'
      >
        <Text className='text-xl w-full text-requester-500 mt-6'>
          Solicitante
        </Text>

        <Text className='w-full mb-4'>
          Encontrar voluntários para resolver problemas!
        </Text>

        <Field placeholder='Nome completo' className='mb-4' />

        <Field placeholder='E-mail' className='mb-4' />

        <Field placeholder='Senha' className='mb-4' />

        <Field placeholder='Confirmar senha' className='mb-4' />

        <Button className='bg-requester-500'>Concluir cadastro</Button>
      </KeyboardAvoidingView>
    </View>
  )
}
