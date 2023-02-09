import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'
import { TColors } from '@src/styles/types'

import AlertIcon from '@src/components/assets/AlertIcon'
import Text from '@src/components/atoms/Text'
import Tooltip from '@src/components/atoms/Tooltip'

import useResponsiveFontSize from '@src/hooks/useResponsiveFontSize'

import { pxToNumber } from '@src/utils/px'

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
  control,
  placeholder,
  secureTextEntry,
  theme = 'primary',
  ...props
}: IFieldProps) => {
  const { width } = useWindowDimensions()
  const [isFocused, setIsFocused] = useState(false)
  const [openTooltip, setOpenTooltip] = useState(false)
  const responsiveFontSize = useResponsiveFontSize('base')

  const [popoverSize, setPopoverSize] = useState({ width: 1000, height: 1000 })

  const screenSize = width - pxToNumber(sizes[10]) * 2
  const bestTooltipWidth = popoverSize.width + pxToNumber(sizes[4])
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
          tw={`
            flex h-15 w-full max-w-screen-s100 flex-row items-center justify-center rounded-3xl border
            ${isFocused ? borderColor.focused : borderColor.default}
            ${error && borderColor.error}
          `}
          {...props}
        >
          {error?.message && (
            <TouchableOpacity
              onPress={() => {
                setOpenTooltip(prev => !prev)
              }}
              tw='flex h-full justify-center rounded-l-3xl pl-4'
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
                    onLayout={e => {
                      setPopoverSize({
                        width: e.nativeEvent.layout.width,
                        height: e.nativeEvent.layout.height
                      })
                    }}
                    tw='text-secondary-500'
                  >
                    {error?.message}
                  </Text>
                }
              >
                <AlertIcon fill={colors.error[500]} tw='h-6 w-6' />
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
            tw={`
              h-full flex-1 rounded-3xl px-4
              placeholder:text-tertiary-400${theme}-500
              ${error && 'ml-2 rounded-l-none pl-2'}
            `}
            style={[responsiveFontSize]}
          />
        </View>
      )}
    />
  )
}

export default styled(Field)
