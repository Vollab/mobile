import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import { RootStackScreen } from 'App'

const CandidateSignUp = ({
  navigation
}: RootStackScreen<'CandidateSignUp'>) => (
  <AuthLayout navigation={navigation} nav={{ arrow: true }}>
    <Text className='text-xl w-full text-candidate-500 mt-6'>Candidato</Text>
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
  </AuthLayout>
)

export default CandidateSignUp
