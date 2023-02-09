import { View } from 'react-native'
import DropDownPicker, {
  DropDownPickerProps
} from 'react-native-dropdown-picker'

import colors from '@src/styles/custom/colors'
import radius from '@src/styles/custom/radius'
import sizes from '@src/styles/custom/sizes'
import { TColors } from '@src/styles/types'

import ArrowIcon from '@src/components/assets/ArrowIcon'
import CheckIcon from '@src/components/assets/CheckIcon'

import { pxToNumber } from '@src/utils/px'

import { styled } from 'nativewind'
import { useCallback, useState } from 'react'

interface IDropdownProps {
  setValue: any
  value: string
  theme?: TColors
  items: DropDownPickerProps<any>['items']
  placeholder: DropDownPickerProps<any>['placeholder']
  direction?: DropDownPickerProps<any>['dropDownDirection']
}

const Check = () => <CheckIcon fill={colors.secondary[500]} tw='h-4 w-4' />

const Dropdown = ({
  value,
  setValue,
  direction,
  placeholder,
  theme = 'primary',
  items: initialItems,
  ...props
}: IDropdownProps) => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState<IDropdownProps['items']>(initialItems)

  const ArrowDown = useCallback(
    () => (
      <ArrowIcon
        fill={value !== null ? colors[theme][500] : colors.tertiary[400]}
        tw='h-4 w-4 -rotate-90'
      />
    ),
    [value, theme]
  )

  const ArrowUp = useCallback(
    () => (
      <ArrowIcon
        fill={value !== null ? colors[theme][500] : colors.tertiary[400]}
        tw='h-4 w-4 rotate-90'
      />
    ),
    [value, theme]
  )

  return (
    <View tw='w-full max-w-screen-s100' {...props}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        TickIconComponent={Check}
        dropDownDirection={direction}
        ArrowUpIconComponent={ArrowUp}
        ArrowDownIconComponent={ArrowDown}
        listItemContainerStyle={{ padding: 10 }}
        labelStyle={{ color: colors[theme][500] }}
        textStyle={{ color: colors.tertiary[1000] }}
        placeholderStyle={{ color: colors.tertiary[400] }}
        listItemLabelStyle={{ color: colors[theme][700] }}
        selectedItemLabelStyle={{ color: colors.secondary[500] }}
        dropDownContainerStyle={{ borderColor: colors[theme][600] }}
        selectedItemContainerStyle={{ backgroundColor: colors[theme][500] }}
        style={{
          height: pxToNumber(sizes[15]),
          borderRadius: pxToNumber(radius.xl),
          paddingLeft: pxToNumber(sizes['4']),
          borderColor:
            value !== null ? colors[theme][500] : colors.tertiary[400]
        }}
      />
    </View>
  )
}

export default styled(Dropdown)