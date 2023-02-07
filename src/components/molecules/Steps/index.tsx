import { TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'

interface IStepsProps {
  steps: { active?: boolean; onPress?: () => void }[]
}

const Steps = ({ steps, ...props }: IStepsProps) => (
  <View className='flex flex-row mb-6' {...props}>
    {steps.map(({ active, onPress }, index) =>
      active ? (
        <TouchableOpacity
          className='rounded-full w-4 h-4 bg-candidate-500 mr-4'
          key={index}
          onPress={onPress}
        />
      ) : (
        <TouchableOpacity
          className='rounded-full w-4 h-4 border-2 border-candidate-500'
          key={index}
          onPress={onPress}
        />
      )
    )}
  </View>
)

export default styled(Steps)
