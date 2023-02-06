import { TextInput, TextInputProps } from 'react-native'

import { styled } from 'nativewind'

const Field = ({ ...props }: TextInputProps) => (
  <TextInput
    className={`
      h-15 p-4 w-full border rounded-3xl max-w-screen-s100 
      border-gray-400

      placeholder:text-gray-400 text-primary-500      
      active:border-primary-600
      focus:border-primary-500
    `}
    {...props}
  />
)

export default styled(Field)
