import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { View } from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'

import Logo from '@src/components/assets/Logo'
import Text from '@src/components/atoms/Text'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { isMd } from '@src/utils/dimensions'

import { IAuthLayoutProps } from '..'
import { useContext } from 'react'

interface IHeaderProps {
  headerTitle?: IAuthLayoutProps['headerTitle']
}

const Header = ({ headerTitle }: IHeaderProps) => {
  const { nav } = useContext(AuthLayoutContext)
  const { moderateScale } = useResponsiveScale()

  const showNav = nav && !isMd()

  return (
    <View
      tw='flex flex-1 w-full'
      style={{ paddingHorizontal: moderateScale({ size: sizes[8] }) }}
    >
      {showNav && <Nav fill={colors.secondary[500]} />}

      <View tw='flex flex-1 items-center justify-center w-full '>
        <Logo
          style={{
            height: moderateScale({ size: sizes[18] }),
            width: moderateScale({ size: sizes[52] })
          }}
        />

        {headerTitle && (
          <Text tw='text-secondary-500 text-center font-title mt-8' size='xl'>
            {headerTitle}
          </Text>
        )}
      </View>
    </View>
  )
}

export default Header
