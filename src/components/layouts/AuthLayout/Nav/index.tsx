import { AuthLayoutContext } from '../context'

import { TouchableOpacity, View } from 'react-native'

import ArrowIcon from '@src/components/assets/ArrowIcon'

import { styled } from 'nativewind'
import React, { useContext } from 'react'

interface INavProps {
  fill: string
}

const Nav = ({ fill, ...props }: INavProps) => {
  const { navigation, nav } = useContext(AuthLayoutContext)

  return (
    <View tw='flex w-full pt-8' {...props}>
      <TouchableOpacity
        tw='h-6 w-4 flex items-center justify-center p-4 -translate-x-2 '
        onPress={() => {
          nav.onArrowClick ? nav.onArrowClick() : navigation.goBack()
        }}
      >
        <ArrowIcon tw='h-6 w-4' fill={fill} />
      </TouchableOpacity>
    </View>
  )
}

export default styled(Nav)
