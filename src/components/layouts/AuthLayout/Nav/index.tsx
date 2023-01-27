import { AuthLayoutContext } from '../context'

import { TouchableOpacity, View } from 'react-native'

import ArrowIcon from '@src/components/assets/ArrowIcon'

import { styled } from 'nativewind'
import React, { useContext } from 'react'

const Nav = ({ fill, ...props }) => {
  const { navigation, nav } = useContext(AuthLayoutContext)

  return (
    <View className='flex w-full pt-8 pl-8' {...props}>
      <TouchableOpacity
        className='h-6 w-4'
        onPress={() => {
          nav.onArrowClick ? nav.onArrowClick() : navigation.goBack()
        }}
      >
        <ArrowIcon className='h-6 w-4' fill={fill} />
      </TouchableOpacity>
    </View>
  )
}

export default styled(Nav)
