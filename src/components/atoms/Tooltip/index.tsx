import {
  Tooltip as RNETooltip,
  TooltipProps as RNETooltipsProps
} from '@rneui/base'
import { styled } from 'nativewind'
import { ReactNode, useState } from 'react'

interface TooltipProps extends RNETooltipsProps {
  children: ReactNode
}

const Tooltip = ({ ...props }: TooltipProps) => {
  const [open, setOpen] = useState(false)

  return (
    <RNETooltip
      visible={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      {...props}
    />
  )
}

export default styled(Tooltip)
