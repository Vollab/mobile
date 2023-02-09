import { Pressable, PressableProps } from 'react-native'

import { TColors } from '@src/styles/types'

import Text from '@src/components/atoms/Text'

import { styled } from 'nativewind'

interface IButtonProps extends PressableProps {
  theme?: TColors
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  children,
  theme = 'primary',
  variant = 'primary',
  ...props
}: IButtonProps) => {
  const bgColors =
    variant === 'primary'
      ? `bg-${theme}-500`
      : `border-2 border-${theme}-500 bg-secondary-500`
  const textColors =
    variant === 'primary' ? 'text-secondary-500' : `text-${theme}-500`

  return (
    <Pressable
      tw={`
        align-center flex h-14 w-full max-w-screen-s100 justify-center rounded-full
        ${bgColors}
      `}
      {...props}
    >
      <Text
        size='lg'
        tw={`
          text-center font-title 
          ${textColors}
        `}
      >
        {children}
      </Text>
    </Pressable>
  )
}

export default styled(Button)
