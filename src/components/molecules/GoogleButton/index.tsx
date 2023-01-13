import GoogleIcon from '../../atoms/GoogleIcon'
import Text from '../../atoms/Text'

import { TouchableOpacity } from 'react-native'

import { styled } from 'nativewind'
import React from 'react'

const GoogleButton = () => (
  <TouchableOpacity className='flex flex-row mt-6'>
    <GoogleIcon className='h-6 w-6 mr-4' />
    <Text className='text-gray-500'>Entrar com o Google</Text>
  </TouchableOpacity>
)

export default styled(GoogleButton)