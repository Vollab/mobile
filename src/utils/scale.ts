import { pxToNumber } from './px'

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 400
const guidelineBaseHeight = 800

const sizeFormatter = (size: number | string) =>
  typeof size === 'string' ? pxToNumber(size) : size

export const scale = (size: number | string) =>
  (width / guidelineBaseWidth) * sizeFormatter(size)

export const verticalScale = (size: number | string) =>
  (height / guidelineBaseHeight) * sizeFormatter(size)

export const moderateScale = (size: number | string, factor = 0.2) =>
  sizeFormatter(size) + (scale(size) - sizeFormatter(size)) * factor

/**
  https://medium.com/soluto-engineering/size-matters-5aeeb462900a

  scale function is pretty straight forward and will return the same linear result as using viewport.

  verticalScale is like scale, but based on height instead of width, which can be useful.

  The real magic happens at moderateScale. The cool thing about it is that you can control the resize factor (default is 0.5).

  If normal scale will increase your size by +2X, moderateScale will only increase it by +X. Or if the resize factor is 0.25, instead of increasing by +2X it will increase by +0.5X.
*/
