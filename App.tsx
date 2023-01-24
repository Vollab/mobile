import '@src/styles'

import AuthSelect from '@src/components/templates/AuthSelect'
import CandidateSecondStep from '@src/components/templates/CandidateSecondStep'
import CandidateSignUp from '@src/components/templates/CandidateSignUp'
import RequesterSignUp from '@src/components/templates/RequesterSignUp'
import SignIn from '@src/components/templates/SignIn'
import SignUp from '@src/components/templates/SignUp'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  AuthSelect: undefined
  RequesterSignUp: undefined
  CandidateSignUp: undefined
  CandidateSecondStep: undefined
}

export type RootStackScreen<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='AuthSelect'
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        <Screen name='AuthSelect' component={AuthSelect} />
        <Screen name='SignIn' component={SignIn} />
        <Screen name='SignUp' component={SignUp} />
        <Screen name='RequesterSignUp' component={RequesterSignUp} />
        <Screen name='CandidateSignUp' component={CandidateSignUp} />
        <Screen name='CandidateSecondStep' component={CandidateSecondStep} />
      </Navigator>
    </NavigationContainer>
  )
}
