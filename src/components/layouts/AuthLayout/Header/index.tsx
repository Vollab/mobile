import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { View } from 'react-native'

import colors from '@src/styles/custom/colors'

import Logo from '@src/components/assets/Logo'
import Text from '@src/components/atoms/Text'

import { isMd } from '@src/utils/Dimensions'

import { IAuthLayoutProps } from '..'
import { useContext } from 'react'

interface IHeaderProps {
  headerTitle?: IAuthLayoutProps['headerTitle']
}

const Header = ({ headerTitle }: IHeaderProps) => {
  const { nav } = useContext(AuthLayoutContext)

  const showNav = nav && !isMd()

  return (
    <View
      className={`
        flex flex-1 w-full p-8 
        ${showNav && 'pt-0'}
      `}
    >
      {showNav && <Nav fill={colors.secondary[500]} />}

      <View className='flex flex-1 items-center justify-center w-full '>
        <Logo />

        {headerTitle && (
          <Text className='text-secondary-500 text-xl text-center font-title mt-8'>
            {headerTitle}
          </Text>
        )}
      </View>
    </View>
  )
}

export default Header
