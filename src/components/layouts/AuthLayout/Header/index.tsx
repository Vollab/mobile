import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { View } from 'react-native'
import { Platform } from 'react-native'

import colors from '@src/styles/colors'

import Logo from '@src/components/atoms/Logo'
import Text from '@src/components/atoms/Text'

import { IAuthLayoutProps } from '..'
import { useContext } from 'react'

interface IHeaderProps {
  headerTitle?: IAuthLayoutProps['headerTitle']
}

const Header = ({ headerTitle }: IHeaderProps) => {
  const { nav } = useContext(AuthLayoutContext)

  return (
    <View className='flex flex-1 w-full'>
      {nav && Platform.OS !== 'web' && <Nav fill={colors.secondary[500]} />}

      <View className='flex flex-1 items-center justify-center w-full px-4'>
        <Logo />

        {headerTitle && (
          <Text className='text-secondary-500 text-xl text-center mt-8'>
            {headerTitle}
          </Text>
        )}
      </View>
    </View>
  )
}

export default Header
