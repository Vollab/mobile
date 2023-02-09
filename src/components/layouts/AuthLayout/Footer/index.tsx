import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { KeyboardAvoidingView, View } from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'

import RoundedTop from '@src/components/assets/RoundedTop'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { isMd } from '@src/utils/dimensions'

import { IAuthLayoutProps } from '..'
import { styled } from 'nativewind'
import { useContext } from 'react'
import { ReactNode } from 'react'

interface IFooterProps {
  children: ReactNode
  hideHeader: IAuthLayoutProps['hideHeader']
  keyboardBehavior: IAuthLayoutProps['keyboardBehavior']
}

const Footer = ({
  children,
  hideHeader,
  keyboardBehavior,
  ...props
}: IFooterProps) => {
  const { nav } = useContext(AuthLayoutContext)
  const { verticalScale } = useResponsiveScale()

  const showNav = (nav ? isMd() : false) || hideHeader

  return (
    <>
      {!hideHeader && (
        <RoundedTop tw='w-full md:hidden' fill={colors.secondary[500]} />
      )}

      <View
        tw={`  
          w-full relative p-8 z-20 bg-secondary-500 overflow-hidden
          md:w-1/2 md:h-full
          ${showNav && 'pt-0'}
          ${hideHeader && 'h-full'}
        `}
        {...props}
        style={{ padding: verticalScale({ size: sizes[8] }) }}
      >
        {showNav && (
          <Nav fill={nav?.color || colors.primary[500]} tw='pb-4 md:py-8' />
        )}

        <KeyboardAvoidingView
          behavior={keyboardBehavior}
          enabled={!!keyboardBehavior}
          tw={`
            flex items-center justify-center w-full
            md:flex-1
            ${hideHeader && 'flex-1'}
          `}
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    </>
  )
}

export default styled(Footer)
