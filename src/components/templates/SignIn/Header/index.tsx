import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import Arrow from '@src/components/atoms/Arrow'
import Logo from '@src/components/atoms/Logo'
import Text from '@src/components/atoms/Text'

interface IHeaderProps {
  onArrowPress: TouchableOpacityProps['onPress']
}

export default function Header({ onArrowPress }: IHeaderProps) {
  return (
    <View className='flex-1 flex-col items-center justify-between pb-12 pt-4 mb-12'>
      <View className='flex w-screen px-6'>
        <TouchableOpacity onPress={onArrowPress} className='h-6 w-4'>
          <Arrow className='h-6 w-4 fill-secondary-500' />
        </TouchableOpacity>
      </View>

      <Logo />

      <Text className='text-secondary-500 text-xl text-center'>
        Construa seu portfólio ajudando pessoas
      </Text>
    </View>
  )
}
