import { Pressable, PressableProps } from 'react-native'

import Text from '@src/components/atoms/Text'

import { styled } from 'nativewind'

interface IButtonProps extends PressableProps {
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  children,
  variant = 'primary',

  ...props
}: IButtonProps) => {
  const bgColors =
    variant === 'primary'
      ? 'bg-primary'
      : 'border-2 border-primary-500 bg-secondary-500'

  const textColors =
    variant === 'primary' ? 'text-secondary-500' : 'text-primary-500'

  return (
    <Pressable
      tw={`
        flex align-center h-14 justify-center w-full rounded-full max-w-screen-s100
        ${bgColors}
      `}
      {...props}
    >
      <Text
        tw={`
          font-title text-center 
          ${textColors}
        `}
        size='lg'
      >
        {children}
      </Text>
    </Pressable>
  )
}

export default styled(Button)
