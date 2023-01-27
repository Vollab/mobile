import { Platform } from 'react-native'

import spacing from '@src/styles/custom/spacing'

type TOSRelative = (
  mobile: string | number,
  web: string | number
) => string | number

type TOSRelativeSize = (
  mobile: keyof typeof spacing,
  web: keyof typeof spacing
) => string | number

export const OSRelative: TOSRelative = (mobile, web) =>
  Platform.OS === 'web' ? web : mobile

export const OSRelativeSize: TOSRelativeSize = (mobile, web) =>
  Platform.OS === 'web' ? web : mobile
