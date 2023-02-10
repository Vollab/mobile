import { useWindowDimensions } from 'react-native'

import { pxToNumber } from '@src/utils/px'

interface IResponsiveScaleParams {
  size: string
  limits?: { max?: number; min?: number }
  type?: 'moderate' | 'vertical' | 'horizontal'
}

type TResponsiveScale = (params?: IResponsiveScaleParams) => number

type TVerifyLimits = (params: {
  min: number
  max: number
  size: number | string
  scaledSize: number
}) => number

type TScale = (params: {
  min?: number
  max?: number
  size: number | string
}) => number

const verifyLimits: TVerifyLimits = ({ size, max, min, scaledSize }) => {
  let newSize = scaledSize
  const maxValue = pxToNumber(size) * max
  const minValue = pxToNumber(size) * min

  if (min) newSize = newSize <= minValue ? minValue : newSize
  if (max) newSize = newSize >= maxValue ? maxValue : newSize

  return newSize
}

const useResponsiveScale = () => {
  const factor = 0.5
  const guidelineBaseWidth = 400
  const guidelineBaseHeight = 800

  const { width, height } = useWindowDimensions()

  const responsiveScale: TResponsiveScale = ({
    size,
    limits,
    type = 'moderate'
  }) => {
    let newSize = pxToNumber(size)

    const vertical = (height / guidelineBaseHeight) * newSize
    const horizontal = (width / guidelineBaseWidth) * newSize

    switch (type) {
      case 'horizontal':
        newSize = horizontal
        break

      case 'vertical':
        newSize = vertical
        break

      default: {
        const verticalProportion = vertical - newSize
        const horizontalProportion = horizontal - newSize
        const bothProportion = verticalProportion + horizontalProportion

        newSize = newSize + bothProportion * factor
        break
      }
    }

    return newSize
  }

  return { responsiveScale, width, height }
}

export default useResponsiveScale

// https://medium.com/soluto-engineering/size-matters-5aeeb462900a
