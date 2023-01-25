import AppBackground from './AppBackground'
import Footer from './Footer'
import Header from './Header'
import { AuthLayoutContext } from './context'

import { SafeAreaView, StatusBar } from 'react-native'

import colors from '@src/styles/colors'

import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { styled } from 'nativewind'
import React, { ReactNode } from 'react'

export interface IAuthLayoutProps {
  children: ReactNode
  hideHeader?: boolean
  headerTitle?: string
  nav?: { arrow?: boolean; onArrowClick?: any }
  keyboardBehavior?: 'position' | 'height' | 'padding'
  navigation: NativeStackScreenProps<any, any>['navigation']
}

const AuthLayout = ({
  nav,
  children,
  navigation,
  headerTitle,
  hideHeader,
  keyboardBehavior,
  ...props
}: IAuthLayoutProps) => (
  <>
    <StatusBar
      translucent
      barStyle={hideHeader ? 'dark-content' : 'light-content'}
      backgroundColor={hideHeader ? colors.secondary[500] : 'transparent'}
    />

    <SafeAreaView
      style={{ paddingTop: StatusBar.currentHeight }}
      className='flex-1 flex-col items-center overflow-hidden md:flex-row-reverse'
    >
      <AppBackground />

      <AuthLayoutContext.Provider value={{ navigation, nav }}>
        {!hideHeader && <Header headerTitle={headerTitle} />}

        <Footer
          hideHeader={hideHeader}
          keyboardBehavior={keyboardBehavior}
          {...props}
        >
          {children}
        </Footer>
      </AuthLayoutContext.Provider>
    </SafeAreaView>
  </>
)

export default styled(AuthLayout)
