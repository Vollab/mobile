import '@src/styles'

import Test from '@src/screens/Test'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export type TRootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  AuthSelect: undefined
  RequesterSignUp: undefined
  CandidateSignUp: undefined
  CandidateSecondStep: undefined
}

export type TRootStackScreen<T extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, T>

export default function App() {
  return (
    // <NavigationContainer>
    //   <Navigator
    //     initialRouteName='AuthSelect'
    //     screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
    //   >
    //     <Screen name='AuthSelect' component={AuthSelect} />
    //     <Screen name='SignIn' component={SignIn} />
    //     <Screen name='SignUp' component={SignUp} />
    //     <Screen name='RequesterSignUp' component={RequesterSignUp} />
    //     <Screen name='CandidateSignUp' component={CandidateSignUp} />
    //   </Navigator>
    // </NavigationContainer>
    <Test />
  )
}
