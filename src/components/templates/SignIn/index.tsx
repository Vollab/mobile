import { TouchableOpacity } from 'react-native'

import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import useAuthForm from '@src/hooks/useAuthForm'

import { RootStackScreen } from 'App'
import Checkbox from 'expo-checkbox'

const SignIn = ({ navigation }: RootStackScreen<'SignIn'>) => {
  const { nav, removePadding } = useAuthForm({
    onBackButtonClick: () => {
      navigation.navigate('AuthSelect')
    }
  })

  return (
    <AuthLayout
      nav={nav}
      navigation={navigation}
      className={removePadding}
      headerTitle='Construa seu portfólio ajudando pessoas'
    >
      <RelativeScrollView className='w-full'>
        <Field placeholder='E-mail' className='mb-4' />
        <Field placeholder='Senha' className='mb-4' />

        <TouchableOpacity className='flex flex-row items-center justify-center mb-4'>
          <Checkbox className='mr-4' />
          <Text className='text-sm'>Lembrar senha</Text>
        </TouchableOpacity>

        <Button className='mb-3'>Entrar</Button>

        <TouchableOpacity className='mb-3 flex flex-row justify-center'>
          <Text className='text-sm'>Esqueci minha senha</Text>
        </TouchableOpacity>
      </RelativeScrollView>
    </AuthLayout>
  )
}

export default SignIn
