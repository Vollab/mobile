import { Dimensions, StatusBar } from 'react-native'

import screens from '@src/styles/custom/screens'

export const phoneHeight =
  Dimensions.get('screen').height + StatusBar.currentHeight

export const isMd =
  Dimensions.get('screen').width > Number(screens.xs.split('p')[0])
