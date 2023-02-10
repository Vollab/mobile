import { TextInput, TextInputProps, View } from 'react-native'

import colors from '@src/styles/custom/colors'
import { TColors } from '@src/styles/types'

import AlertIcon from '@src/components/assets/AlertIcon'
import Tooltip from '@src/components/atoms/Tooltip'

import useResponsiveFontSize from '@src/hooks/useResponsiveFontSize'

import { styled } from 'nativewind'
import { useState } from 'react'
import { Control, Controller, ControllerProps } from 'react-hook-form'

export interface IFieldProps extends TextInputProps {
  theme?: TColors
  control: Control<any>
  name: ControllerProps['name']
  rules?: ControllerProps['rules']
}

const Field = ({
  name,
  rules,
  style,
  control,
  placeholder,
  secureTextEntry,
  theme = 'primary',
  ...props
}: IFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const responsiveFontSize = useResponsiveFontSize('base')

  const onFieldFocus = () => setIsFocused(true)

  const onFieldBlur = ({ onBlur }) => {
    onBlur()
    setIsFocused(false)
  }

  const getFieldBorderColor = (error: boolean) => {
    if (error) return colors.error[500]
    else return isFocused ? colors[theme][500] : colors.tertiary[500]
  }

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({
        fieldState: { error },
        field: { onChange, onBlur, value, ref }
      }) => (
        <View
          tw='flex h-15 w-full max-w-screen-s100 flex-row items-center justify-center rounded-3xl border'
          style={[{ borderColor: getFieldBorderColor(!!error) }, style]}
          {...props}
        >
          {error?.message && (
            <Tooltip
              popoverText={error.message}
              backgroundColor={colors.error[500]}
              buttonTw='h-full px-4 flex items-center justify-center'
            >
              <AlertIcon fill={colors.error[500]} tw='h-6 w-6' />
            </Tooltip>
          )}

          <TextInput
            ref={ref}
            value={value}
            onFocus={onFieldFocus}
            onChangeText={onChange}
            placeholder={placeholder}
            style={[responsiveFontSize]}
            secureTextEntry={secureTextEntry}
            onBlur={() => onFieldBlur({ onBlur })}
            // eslint-disable-next-line tailwindcss/classnames-order
            tw={`
              h-full flex-1 rounded-3xl px-4  placeholder:text-tertiary-400 outline-none
              text-${theme}-500
              ${error && 'rounded-l-none pl-0'}
            `}
          />
        </View>
      )}
    />
  )
}

export default styled(Field)
