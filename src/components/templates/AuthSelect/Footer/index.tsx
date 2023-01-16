import { TouchableOpacityProps, View } from 'react-native'

import Button from '@src/components/molecules/Button'
import GoogleButton from '@src/components/molecules/GoogleButton'

interface IFooterProps {
  onSignInPress: TouchableOpacityProps['onPress']
  onSignUpPress: TouchableOpacityProps['onPress']
}

export default function Footer({ onSignInPress, onSignUpPress }: IFooterProps) {
  return (
    <View className='relative z-20 w-full h-64 flex px-14 items-center justify-center'>
      <Button variant='secondary' onPress={onSignInPress}>
        Entrar
      </Button>

      <Button className='mt-6' onPress={onSignUpPress}>
        Cadastrar
      </Button>

      <GoogleButton className='mt-6' />
    </View>
  )
}
