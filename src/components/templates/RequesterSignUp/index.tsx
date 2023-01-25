import { ScrollView } from 'react-native'

import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import useAuthForm from '@src/hooks/useAuthForm'

import { RootStackScreen } from 'App'

const RequesterSignUp = ({
  navigation
}: RootStackScreen<'RequesterSignUp'>) => {
  const { hideHeader, nav, showInfo, showSubmit } = useAuthForm()

  return (
    <AuthLayout nav={nav} navigation={navigation} hideHeader={hideHeader}>
      {showInfo && (
        <>
          <Text className='text-xl w-full text-requester-500'>Solicitante</Text>

          <Text className='w-full mb-6'>
            Encontrar voluntários para resolver problemas!
          </Text>
        </>
      )}

      <ScrollView>
        <Field className='mb-4' placeholder='Nome completo' />
        <Field placeholder='E-mail' className='mb-4' />
        <Field placeholder='Senha' className='mb-4' />
        <Field placeholder='Confirmar senha' className='mb-6' />

        <Button
          className='bg-requester-500 mt-auto'
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        >
          Concluir cadastro
        </Button>
      </ScrollView>
    </AuthLayout>
  )
}

export default RequesterSignUp
