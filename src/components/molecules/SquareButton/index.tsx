import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'
import { TColors } from '@src/styles/types'

import Text from '@src/components/atoms/Text'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { styled } from 'nativewind'
import { ReactNode } from 'react'

interface ISquareButton extends TouchableOpacityProps {
  label: string
  icon: ReactNode
  theme?: TColors
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
      tw='flex flex-col items-center justify-center rounded-xl'
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

      <Text tw='mt-4 text-secondary-500' size='lg'>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default styled(SquareButton)
