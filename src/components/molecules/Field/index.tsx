import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'

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
  name: ControllerProps['name']
  tooltip?: {
    width?: number
    height?: number
  }
  rules?: ControllerProps['rules']
}

const Field = ({
  name,
  rules,
  control,
  className,
  placeholder,
  tooltip,
  ...props
}: IFieldProps) => {
  const [openTooltip, setOpenTooltip] = useState(false)
  const [popoverSize, setPopoverSize] = useState({ width: 1000, height: 1000 })

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
          ${error ? 'border-error-500' : 'border-tertiary-400'}

          placeholder:text-tertiary-400 text-primary-500      
          active:border-primary-600
          focus:border-primary-500
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
                visible={openTooltip}
                backgroundColor={colors.error[500]}
                width={popoverSize.width + pxToNumber(sizes[4])}
                height={popoverSize.height + pxToNumber(sizes[4])}
                onOpen={() => {
                  setOpenTooltip(true)
                }}
                onClose={() => {
                  setOpenTooltip(false)
                }}
                containerStyle={{ padding: 0 }}
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
            onBlur={onBlur}
            className='flex-1 h-full rounded-r-3xl px-4'
            onChangeText={onChange}
            placeholder={placeholder}
          />
        </View>
      )}
    />
  )
}

export default styled(Field)
