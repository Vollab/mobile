import { TextInput, TextInputProps } from 'react-native'

import { styled } from 'nativewind'

const Field = ({ ...props }: TextInputProps) => (
  <TextInput
    className='h-15 p-4 w-full border border-gray-500 rounded-3xl placeholder:text-base '
    {...props}
  />
)

export default styled(Field)
