import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import useAuthForm from '@src/hooks/useAuthForm'

import { RootStackScreen } from 'App'

const RequesterSignUp = ({
  navigation
}: RootStackScreen<'RequesterSignUp'>) => {
  const { hideHeader, nav, showInfo, removePadding } = useAuthForm({})

  return (
    <AuthLayout
      nav={nav}
      navigation={navigation}
      hideHeader={hideHeader}
      className={removePadding}
    >
      {showInfo && (
        <>
          <Text className='text-xl w-full  max-w-screen-s100 text-requester-500 md:text-center'>
            Solicitante
          </Text>

          <Text className='w-full max-w-screen-s100 mb-6 md:text-center'>
            Encontrar voluntários para resolver problemas!
          </Text>
        </>
      )}

      <RelativeScrollView
        className='w-full'
        contentContainerStyle={{ height: hideHeader ? '100%' : 'auto' }}
      >
        <Field className='mb-4' placeholder='Nome completo' />
        <Field placeholder='E-mail' className='mb-4' />
        <Field placeholder='Senha' className='mb-4' />
        <Field placeholder='Confirmar senha' className='mb-6' />

        <Button
          className='bg-requester-500 md:mt-0'
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        >
          Concluir cadastro
        </Button>
      </RelativeScrollView>
    </AuthLayout>
  )
}

export default RequesterSignUp
