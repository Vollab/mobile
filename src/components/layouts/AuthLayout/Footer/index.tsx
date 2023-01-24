import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { KeyboardAvoidingView, View } from 'react-native'
import { Platform } from 'react-native'

import colors from '@src/styles/colors'

import RoundedTop from '@src/components/icons/RoundedTop'

import { styled } from 'nativewind'
import { useContext } from 'react'
import { ReactNode } from 'react'

interface IFooterProps {
  children: ReactNode
}

const Footer = ({ children, ...props }: IFooterProps) => {
  const { nav } = useContext(AuthLayoutContext)

  return (
    <>
      <RoundedTop className='w-full md:hidden' fill={colors.secondary[500]} />

      <View
        className='relative px-4 py-8 w-full z-20 bg-secondary-500 md:w-1/2 md:h-full'
        {...props}
      >
        {nav && Platform.OS === 'web' && <Nav fill={colors.primary[500]} />}

        <KeyboardAvoidingView
          behavior='padding'
          className='flex justify-center items-center w-full md:h-full'
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    </>
  )
}

export default styled(Footer)
