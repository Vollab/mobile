import { useWindowDimensions } from 'react-native'

import { pxToNumber } from '@src/utils/px'

type TVerifyLimits = (params: {
  size: number | string
  min: number
  max: number
  scaledSize: number
}) => number

type TScale = (params: {
  size: number | string
  min?: number
  max?: number
}) => number

const verifyLimits: TVerifyLimits = ({ size, max, min, scaledSize }) => {
  let newSize = scaledSize
  const maxValue = pxToNumber(size) * max
  const minValue = pxToNumber(size) * min

  if (max) newSize = newSize >= maxValue ? maxValue : newSize
  if (min) newSize = newSize <= minValue ? minValue : newSize

  return newSize
}

const useResponsiveScale = () => {
  const guidelineBaseWidth = 400
  const guidelineBaseHeight = 800

  const { width, height } = useWindowDimensions()

  const horizontalScale: TScale = ({ size, max, min }) => {
    const scaledSize = (width / guidelineBaseWidth) * pxToNumber(size)

    return verifyLimits({ max, min, scaledSize, size })
  }

  const verticalScale: TScale = ({ size, max, min }) => {
    const scaledSize = (height / guidelineBaseHeight) * pxToNumber(size)

    return verifyLimits({ size, max, min, scaledSize })
  }

  const moderateScale: TScale = ({ size, max, min }) => {
    const factor = 0.5

    const scaledSize =
      pxToNumber(size) + (horizontalScale({ size }) - pxToNumber(size)) * factor

    return verifyLimits({ max, min, size, scaledSize })
  }

  return { horizontalScale, verticalScale, moderateScale, width, height }
}

export default useResponsiveScale

/**
  https://medium.com/soluto-engineering/size-matters-5aeeb462900a

  scale function is pretty straight forward and will return the same linear result as using viewport.

  verticalScale is like scale, but based on height instead of width, which can be useful.

  The real magic happens at moderateScale. The cool thing about it is that you can control the resize factor (default is 0.5).

  If normal scale will increase your size by +2X, moderateScale will only increase it by +X. Or if the resize factor is 0.25, instead of increasing by +2X it will increase by +0.5X.
*/
