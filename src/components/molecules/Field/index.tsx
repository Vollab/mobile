import {
  Dimensions,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'

import AlertIcon from '@src/components/assets/AlertIcon'
import Text from '@src/components/atoms/Text'
import Tooltip from '@src/components/atoms/Tooltip'

import { pxToNumber } from '@src/utils/Px'

import { styled } from 'nativewind'
import React, { useState } from 'react'
import { Control, Controller, ControllerProps } from 'react-hook-form'

export interface IFieldProps extends TextInputProps {
  control: Control<any>
  theme?: keyof typeof colors
  name: ControllerProps['name']
  rules?: ControllerProps['rules']
  tooltip?: { width?: number; height?: number }
}

const Field = ({
  name,
  rules,
  control,
  tooltip,
  className,
  placeholder,
  secureTextEntry,
  theme = 'primary',
  ...props
}: IFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [openTooltip, setOpenTooltip] = useState(false)
  const [popoverSize, setPopoverSize] = useState({ width: 1000, height: 1000 })

  const bestTooltipWidth = popoverSize.width + pxToNumber(sizes[4])
  const screenSize = Dimensions.get('screen').width - pxToNumber(sizes[10]) * 2

  const tooltipWidth =
    bestTooltipWidth < screenSize ? bestTooltipWidth : screenSize

  const borderColor = {
    error: 'border-error-500',
    default: 'border-tertiary-500',
    focused: `border-${theme}-500`
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
          className={`
            h-15 w-full border rounded-3xl max-w-screen-s100 flex flex-row items-center justify-center

            ${isFocused ? borderColor.focused : borderColor.default}
            ${error && borderColor.error}
          `}
          {...props}
        >
          {error?.message && (
            <TouchableOpacity
              className='h-full pl-4 flex justify-center rounded-l-3xl'
              onPress={() => {
                setOpenTooltip(prev => !prev)
              }}
            >
              <Tooltip
                width={tooltipWidth}
                visible={openTooltip}
                containerStyle={{ padding: 0 }}
                backgroundColor={colors.error[500]}
                height={popoverSize.height + pxToNumber(sizes[4])}
                onOpen={() => {
                  setOpenTooltip(true)
                }}
                onClose={() => {
                  setOpenTooltip(false)
                }}
                popover={
                  <Text
                    className='text-secondary-500 text-base'
                    onLayout={e => {
                      setPopoverSize({
                        width: e.nativeEvent.layout.width,
                        height: e.nativeEvent.layout.height
                      })
                    }}
                  >
                    {error?.message}
                  </Text>
                }
              >
                <AlertIcon fill={colors.error[500]} className='h-6 w-6' />
              </Tooltip>
            </TouchableOpacity>
          )}

          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onFocus={() => {
              setIsFocused(true)
            }}
            onBlur={() => {
              onBlur()
              setIsFocused(false)
            }}
            className={`
              flex-1 h-full px-4 rounded-3xl placeholder:text-tertiary-400
              text-${theme}-500
              ${error && 'rounded-l-none ml-2 pl-2'}
            `}
          />
        </View>
      )}
    />
  )
}

export default styled(Field)
