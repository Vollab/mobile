import { ScrollView } from 'react-native'

import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import useAuthForm from '@src/hooks/useAuthForm'

import { RootStackScreen } from 'App'

const CandidateSignUp = ({
  navigation
}: RootStackScreen<'CandidateSignUp'>) => {
  const { hideHeader, nav, showInfo, removePadding } = useAuthForm()

  return (
    <AuthLayout
      nav={nav}
      navigation={navigation}
      hideHeader={hideHeader}
      className={removePadding}
    >
      {showInfo && (
        <>
          <Text className='text-xl w-full text-candidate-500'>Candidato</Text>

          <Text className='w-full mb-6'>
            Encontrar voluntários para resolver problemas!
          </Text>
        </>
      )}

      <ScrollView className='w-full'>
        <Field placeholder='Nome completo' className='mb-4' />
        <Field placeholder='E-mail' className='mb-4' />
        <Field placeholder='Senha' className='mb-4' />
        <Field placeholder='Confirmar senha' className='mb-6' />

        <Button
          className='bg-candidate-500'
          onPress={() => {
            navigation.navigate('CandidateSecondStep')
          }}
        >
          Próximo passo
        </Button>
      </ScrollView>
    </AuthLayout>
  )
}

export default CandidateSignUp
