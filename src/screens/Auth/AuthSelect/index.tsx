import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import GoogleButton from '@src/components/molecules/GoogleButton'

import { TRootStackScreen } from 'App'

const AuthSelect = ({ navigation }: TRootStackScreen<'AuthSelect'>) => (
  <AuthLayout
    navigation={navigation}
    headerTitle='O melhor lugar para construir portfólios ou buscar por voluntários'
  >
    <Button
      variant='secondary'
      onPress={() => {
        navigation.navigate('SignIn')
      }}
    >
      Entrar
    </Button>

    <Button
      tw='mt-6'
      onPress={() => {
        navigation.navigate('SignUp')
      }}
    >
      Cadastrar
    </Button>

    <GoogleButton tw='mt-6' />
  </AuthLayout>
)

export default AuthSelect
