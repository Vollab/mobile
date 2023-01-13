import { styled } from 'nativewind'
import { Pressable, PressableProps, Text } from 'react-native'

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
      className={`flex align-center justify-center h-14 w-full rounded-full ${bgColors}`}
      {...props}
    >
      <Text className={`text-center font-semibold text-lg ${textColors}`}>
        {children}
      </Text>
    </Pressable>
  )
}

export default styled(Button)
