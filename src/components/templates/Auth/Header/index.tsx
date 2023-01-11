import { View } from 'react-native'

import Logo from '@src/components/atoms/Logo'

export default function Header() {
  return (
    <View className='flex-1 flex-col items-center justify-center pb-12'>
      <Logo />
    </View>
  )
}
