import '@src/styles'

import AuthSelect from '@src/components/templates/AuthSelect'
import SignIn from '@src/components/templates/SignIn'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

type RootStackParamList = {
  SignIn: undefined
  AuthSelect: undefined
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
      </Navigator>
    </NavigationContainer>
  )
}
