import { TouchableOpacity } from 'react-native'

import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import { RootStackScreen } from 'App'
import Checkbox from 'expo-checkbox'

const SignIn = ({ navigation }: RootStackScreen<'SignIn'>) => (
  <AuthLayout
    navigation={navigation}
    nav={{
      arrow: true,
      onArrowClick: () => {
        navigation.navigate('AuthSelect')
      }
    }}
    headerTitle='Construa seu portfólio ajudando pessoas'
  >
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
  </AuthLayout>
)

export default SignIn
