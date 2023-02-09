import { AuthLayoutContext } from '../context'

import { TouchableOpacity, View } from 'react-native'
import { ViewProps } from 'react-native'

import sizes from '@src/styles/custom/sizes'

import ArrowIcon from '@src/components/assets/ArrowIcon'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { styled } from 'nativewind'
import React, { useContext } from 'react'

interface INavProps extends ViewProps {
  fill: string
}

const Nav = ({ fill, style, ...props }: INavProps) => {
  const { navigation, nav } = useContext(AuthLayoutContext)
  const { verticalScale } = useResponsiveScale()

  return (
    <View
      tw='flex w-full'
      style={[{ paddingTop: verticalScale({ size: sizes[8] }) }, style]}
      {...props}
    >
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
