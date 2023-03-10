import { Platform } from 'react-native'

import sizes from '@src/styles/custom/sizes'

type TOSRelative = (mobile: any, web: any) => any

type TOSRelativeSize = (
  mobile: keyof typeof sizes,
  web: keyof typeof sizes
) => string | number

export const OSRelative: TOSRelative = (mobile, web) =>
  Platform.OS === 'web' ? web : mobile

export const OSRelativeSize: TOSRelativeSize = (mobile, web) =>
  Platform.OS === 'web' ? web : mobile
