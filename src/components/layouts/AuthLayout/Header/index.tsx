import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { View } from 'react-native'

import colors from '@src/styles/custom/colors'

import Logo from '@src/components/assets/Logo'
import Text from '@src/components/atoms/Text'

import { isMd } from '@src/utils/dimensions'

import { IAuthLayoutProps } from '..'
import { useContext } from 'react'

interface IHeaderProps {
  headerTitle?: IAuthLayoutProps['headerTitle']
}

const Header = ({ headerTitle }: IHeaderProps) => {
  const { nav } = useContext(AuthLayoutContext)

  const showNav = nav && !isMd()

  return (
    <View tw='flex w-full flex-1'>
      {showNav && <Nav fill={colors.secondary[500]} />}

      <View tw='flex w-full flex-1 items-center justify-center '>
        <Logo />

        {headerTitle && (
          <Text size='xl' tw='mt-8 text-center font-title text-secondary-500'>
            {headerTitle}
          </Text>
        )}
      </View>
    </View>
  )
}

export default Header
