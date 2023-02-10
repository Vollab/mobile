import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import colors from '@src/styles/custom/colors'
import { TColors } from '@src/styles/types'

import Text from '@src/components/atoms/Text'

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
  return (
    <TouchableOpacity
      tw='flex h-32 w-32 flex-col items-center justify-center rounded-xl'
      style={[{ backgroundColor: colors[theme][500] }, style]}
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
