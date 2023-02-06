import { View } from 'react-native'

import { styled } from 'nativewind'

interface IStepsProps {
  steps: boolean[]
}

const Steps = ({ steps, ...props }: IStepsProps) => (
  <View className='flex flex-row mb-6' {...props}>
    {steps.map(step =>
      step ? (
        <View className='rounded-full w-4 h-4 bg-candidate-500 mr-4' />
      ) : (
        <View className='rounded-full w-4 h-4 border-2 border-candidate-500' />
      )
    )}
  </View>
)

export default styled(Steps)
