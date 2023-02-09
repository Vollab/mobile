import AppBackground from './AppBackground'
import Footer from './Footer'
import Header from './Header'
import { AuthLayoutContext } from './context'

import { SafeAreaView, StatusBar } from 'react-native'

import colors from '@src/styles/custom/colors'

import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { styled } from 'nativewind'
import { ReactNode } from 'react'

export interface IAuthLayoutProps {
  children: ReactNode
  hideHeader?: boolean
  headerTitle?: string
  keyboardBehavior?: 'position' | 'height' | 'padding'
  navigation: NativeStackScreenProps<any, any>['navigation']
  nav?: { arrow?: boolean; onArrowClick?: any; color?: string }
}

const AuthLayout = ({
  nav,
  children,
  navigation,
  headerTitle,
  hideHeader,
  keyboardBehavior,
  ...props
}: IAuthLayoutProps) => {
  return (
    <AuthLayoutContext.Provider value={{ navigation, nav }}>
      <StatusBar
        translucent
        barStyle={hideHeader ? 'dark-content' : 'light-content'}
        backgroundColor={hideHeader ? colors.secondary[500] : 'transparent'}
      />

      <SafeAreaView
        style={{ paddingTop: StatusBar.currentHeight }}
        tw='flex h-full flex-col overflow-hidden md:flex-row-reverse'
      >
        <AppBackground />

        {!hideHeader && <Header headerTitle={headerTitle} />}

        <Footer
          hideHeader={hideHeader}
          keyboardBehavior={keyboardBehavior}
          {...props}
        >
          {children}
        </Footer>
      </SafeAreaView>
    </AuthLayoutContext.Provider>
  )
}

export default styled(AuthLayout)
