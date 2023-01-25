import Text from '../../atoms/Text'

import { TouchableOpacity } from 'react-native'

import GoogleIcon from '@src/components/icons/GoogleIcon'

import { styled } from 'nativewind'
import React from 'react'

const GoogleButton = ({ ...props }) => (
  <TouchableOpacity
    className='flex flex-row items-center justify-center'
    {...props}
  >
    <GoogleIcon className='h-6 w-6 mr-4' />
    <Text className='text-gray-500'>Entrar com o Google</Text>
  </TouchableOpacity>
)

export default styled(GoogleButton)
