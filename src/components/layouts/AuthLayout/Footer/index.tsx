import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { KeyboardAvoidingView, View } from 'react-native'
import { Platform } from 'react-native'

import colors from '@src/styles/custom/colors'

import RoundedTop from '@src/components/assets/RoundedTop'

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

  const showNav = hideHeader || (nav && Platform.OS === 'web')

  return (
    <>
      {!hideHeader && (
        <RoundedTop className='w-full md:hidden' fill={colors.secondary[500]} />
      )}

      <View
        className={`
          relative p-8 z-20 bg-secondary-500 overflow-hidden 
          w-full
          md:w-1/2 md:h-full
          ${hideHeader && 'h-full'}
        `}
        {...props}
      >
        {showNav && <Nav fill={colors.primary[500]} className='p-0 pb-4' />}

        <KeyboardAvoidingView
          enabled={!!keyboardBehavior}
          behavior={keyboardBehavior}
          className={`
              flex items-center justify-center w-full
              md:h-full
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
