import { KeyboardAvoidingView, View } from 'react-native'

import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import { RootStackScreen } from 'App'

export default function Footer({
  navigation
}: {
  navigation: RootStackScreen<'CandidateSignUp'>['navigation']
}) {
  return (
    <View className='w-full h-129'>
      <KeyboardAvoidingView
        behavior='padding'
        className='relative z-20 w-full h-full px-8 flex flex-col'
      >
        <Text className='text-xl w-full text-candidate-500 mt-6'>
          Candidato
        </Text>

        <Text className='w-full mb-4'>
          Encontrar voluntários para resolver problemas!
        </Text>

        <Field placeholder='Nome completo' className='mb-4' />

        <Field placeholder='E-mail' className='mb-4' />

        <Field placeholder='Senha' className='mb-4' />

        <Field placeholder='Confirmar senha' className='mb-4' />

        <Button
          className='bg-candidate-500'
          onPress={() => {
            navigation.navigate('CandidateSecondStep')
          }}
        >
          Próximo passo
        </Button>
      </KeyboardAvoidingView>
    </View>
  )
}
