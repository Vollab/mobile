import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { Dimensions, KeyboardAvoidingView, View } from 'react-native'
import { Platform } from 'react-native'

import colors from '@src/styles/custom/colors'

import RoundedTop from '@src/components/assets/RoundedTop'

import { isMd } from '@src/utils/Dimensions'

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

  const showNav = (nav ? isMd() : false) || hideHeader

  return (
    <>
      {!hideHeader && (
        <RoundedTop className='w-full md:hidden' fill={colors.secondary[500]} />
      )}

      <View
        className={`  
          w-full relative p-8 z-20 bg-secondary-500 overflow-hidden
          md:w-1/2 md:h-full
          ${showNav && 'pt-0'}
          ${hideHeader && 'h-full'}
        `}
        {...props}
      >
        {showNav && <Nav fill={nav.color} className='pb-4 md:py-8' />}

        <KeyboardAvoidingView
          behavior={keyboardBehavior}
          enabled={!!keyboardBehavior}
          className={`
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
