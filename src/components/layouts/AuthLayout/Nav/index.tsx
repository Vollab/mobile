import { AuthLayoutContext } from '../context'

import { TouchableOpacity, View } from 'react-native'
import { ViewProps } from 'react-native'

import sizes from '@src/styles/custom/sizes'

import ArrowIcon from '@src/components/assets/ArrowIcon'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { styled } from 'nativewind'
import { useContext } from 'react'

interface INavProps extends ViewProps {
  fill: string
}

const Nav = ({ fill, style, ...props }: INavProps) => {
  const { navigation, nav } = useContext(AuthLayoutContext)
  const { responsiveScale } = useResponsiveScale()

  return (
    <View
      style={[
        {
          paddingVertical: responsiveScale({ size: sizes[4], type: 'vertical' })
        },
        style
      ]}
      tw='flex w-full'
      {...props}
    >
      <TouchableOpacity
        onPress={() => {
          nav.onArrowClick ? nav.onArrowClick() : navigation.goBack()
        }}
        tw='flex h-6 w-4 -translate-x-2 items-center justify-center p-4'
      >
        <ArrowIcon fill={fill} tw='h-6 w-4' />
      </TouchableOpacity>
    </View>
  )
}

export default styled(Nav)
