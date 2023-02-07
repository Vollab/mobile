import { TouchableOpacity, View } from 'react-native'

import colors from '@src/styles/custom/colors'

import UserIcon from '@src/components/assets/UserIcon'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'

import { RootStackScreen } from 'App'

const SignUp = ({ navigation }: RootStackScreen<'SignUp'>) => {
  return (
    <AuthLayout nav={{ arrow: true }} navigation={navigation}>
      <View className='max-w-screen-s100 w-full'>
        <Text className='text-xl text-primary-500 font-title text-center'>
          Você precisa de ajuda ou quer ajudar alguém?
        </Text>

        <Text className='text-lg text-candidate-500 mt-8'>Candidato</Text>

        <Text>
          Criar seu próprio portfólio resolvendo problemas do mundo real!
        </Text>

        <Text className='text-lg text-requester-500 mt-6'>Solicitante</Text>

        <Text>Encontrar voluntários para resolver problemas!</Text>
      </View>

      <View
        className='
      flex flex-row w-full justify-between mt-8 max-w-screen-s100
      md:justify-evenly
    '
      >
        <TouchableOpacity
          onPress={() => navigation.push('CandidateSignUp')}
          className='flex flex-col h-32 w-32 rounded-xl items-center justify-center bg-candidate-500'
        >
          <UserIcon className='h-8 w-8' fill={colors.secondary[500]} />

          <Text className='text-secondary-500 mt-4 text-lg'>Candidato</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='flex flex-col h-32 w-32 rounded-xl items-center justify-center bg-requester-500'
          onPress={() => navigation.push('RequesterSignUp')}
        >
          <UserIcon className='h-8 w-8' fill={colors.secondary[500]} />

          <Text className='text-secondary-500 mt-4 text-lg'>Solicitante</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  )
}

export default SignUp
