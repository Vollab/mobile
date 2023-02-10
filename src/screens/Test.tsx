import { View } from 'react-native'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

const Test = () => {
  const { responsiveScale } = useResponsiveScale()

  return (
    <View tw='flex h-full items-center justify-center'>
      <View
        tw='bg-red-500'
        style={{
          width: responsiveScale({ size: 100 }),
          height: responsiveScale({ size: 100 })
        }}
      />
    </View>
  )
}

export default Test
