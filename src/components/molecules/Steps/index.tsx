import { View } from 'react-native'

import { styled } from 'nativewind'

interface IStepsProps {
  steps: boolean[]
}

const Steps = ({ steps, ...props }: IStepsProps) => (
  <View className='flex flex-row mb-6' {...props}>
    {steps.map((step, index) =>
      step ? (
        <View
          className='rounded-full w-4 h-4 bg-candidate-500 mr-4'
          key={index}
        />
      ) : (
        <View
          className='rounded-full w-4 h-4 border-2 border-candidate-500'
          key={index}
        />
      )
    )}
  </View>
)

export default styled(Steps)
