import { Pressable, PressableProps } from 'react-native'

import Text from '@src/components/atoms/Text'

import { styled } from 'nativewind'

interface IButtonProps extends PressableProps {
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ children, variant = 'primary', ...props }: IButtonProps) => {
  const bgColors =
    variant === 'primary'
      ? 'bg-primary'
      : 'border-2 border-primary-500 bg-secondary-500'

  const textColors =
    variant === 'primary' ? 'text-secondary-500' : 'text-primary-500'

  return (
    <Pressable
      className={`
        flex align-center justify-center h-14 w-full rounded-full max-w-screen-s100
        ${bgColors}
      `}
      {...props}
    >
      <Text
        className={`
          font-title text-center text-lg 
          ${textColors}
        `}
      >
        {children}
      </Text>
    </Pressable>
  )
}

export default styled(Button)
