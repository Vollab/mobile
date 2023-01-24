import { KeyboardAvoidingView, View } from 'react-native'

import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import { RootStackScreen } from 'App'

export default function Footer({
  navigation
}: {
  navigation: RootStackScreen<'CandidateSecondStep'>['navigation']
}) {
  return (
    <View className='w-full h-108'>
      <KeyboardAvoidingView
        behavior='padding'
        className='relative z-20 w-full h-full px-8 flex flex-col'
      >
        <Text className='text-xl w-full text-candidate-500 mt-6'>Quase lá</Text>

        <Text className='w-full mb-4'>
          Não se preocupe algumas informações poderão ser alteradas
          posteriormente
        </Text>

        <Field placeholder='Pequena descrição' className='mb-4' />
        <Field placeholder='Área de atuação' className='mb-4' />
        <Field placeholder='Nível de experiência' className='mb-4' />

        <Button
          className='bg-candidate-500'
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        >
          Concluir cadastro
        </Button>
      </KeyboardAvoidingView>
    </View>
  )
}
