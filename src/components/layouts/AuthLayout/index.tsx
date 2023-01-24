import AppBackground from './AppBackground'
import Footer from './Footer'
import Header from './Header'
import { AuthLayoutContext } from './context'

import { SafeAreaView, StatusBar } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import React, { ReactNode } from 'react'

export interface IAuthLayoutProps {
  children: ReactNode
  headerTitle?: string
  nav?: { arrow?: boolean; arrowRedirect?: string }
  navigation: NativeStackScreenProps<any, any>['navigation']
}

const AuthLayout = ({
  nav,
  children,
  navigation,
  headerTitle
}: IAuthLayoutProps) => (
  <>
    <StatusBar backgroundColor='transparent' translucent />

    <SafeAreaView
      style={{ paddingTop: StatusBar.currentHeight }}
      className='flex-1 flex-col items-center overflow-hidden md:flex-row-reverse'
    >
      <AppBackground />

      <AuthLayoutContext.Provider value={{ navigation, nav }}>
        <Header headerTitle={headerTitle} />

        <Footer>{children}</Footer>
      </AuthLayoutContext.Provider>
    </SafeAreaView>
  </>
)

export default AuthLayout
