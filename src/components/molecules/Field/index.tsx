import { TextInput, TextInputProps } from 'react-native'

import { styled } from 'nativewind'
import React, { forwardRef } from 'react'
import { Control, Controller, ControllerProps } from 'react-hook-form'

export interface IFieldProps extends TextInputProps {
  name: ControllerProps['name']
  control: Control<any>
}

const Field = ({ control, name, ...props }: IFieldProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        className={`
          h-15 p-4 w-full border rounded-3xl max-w-screen-s100 
        border-gray-400

        placeholder:text-gray-400 text-primary-500      
        active:border-primary-600
        focus:border-primary-500
        `}
        {...props}
      />
    )}
  />
)

export default styled(Field)
