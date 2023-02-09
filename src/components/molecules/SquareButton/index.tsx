import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'
import { TColors } from '@src/styles/types'

import Text from '@src/components/atoms/Text'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { styled } from 'nativewind'
import { ReactNode } from 'react'

interface ISquareButton extends TouchableOpacityProps {
  theme?: TColors
  icon: ReactNode
  label: string
}

const SquareButton = ({
  label,
  style,
  icon: Icon,
  theme = 'primary',
  ...props
}: ISquareButton) => {
  const { moderateScale } = useResponsiveScale()

  return (
    <TouchableOpacity
      tw='flex flex-col rounded-xl items-center justify-center'
      style={[
        {
          backgroundColor: colors[theme][500],
          height: moderateScale({ size: sizes[32], max: 1 }),
          width: moderateScale({ size: sizes[32], max: 1 })
        },
        style
      ]}
      {...props}
    >
      {Icon}

      <Text tw='text-secondary-500 mt-4 text-lg'>{label}</Text>
    </TouchableOpacity>
  )
}

export default styled(SquareButton)
