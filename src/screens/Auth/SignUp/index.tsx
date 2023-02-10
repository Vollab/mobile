import { View } from 'react-native'

import colors from '@src/styles/custom/colors'

import UserIcon from '@src/components/assets/UserIcon'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import SquareButton from '@src/components/molecules/SquareButton'

import { TRootStackScreen } from 'App'

const User = <UserIcon fill={colors.secondary[500]} tw='h-8 w-8' />

const SignUp = ({ navigation }: TRootStackScreen<'SignUp'>) => {
  return (
    <AuthLayout nav={{ arrow: true }} navigation={navigation}>
      <View tw='w-full max-w-screen-s100 '>
        <Text size='xl' tw='text-center font-title text-primary-500'>
          Você precisa de ajuda ou quer ajudar alguém?
        </Text>

        <Text size='lg' tw='mt-8 text-candidate-500'>
          Candidato
        </Text>

        <Text>
          Criar seu próprio portfólio resolvendo problemas do mundo real!
        </Text>

        <Text size='lg' tw='mt-6 text-requester-500'>
          Solicitante
        </Text>

        <Text tw='mb-8'>Encontrar voluntários para resolver problemas!</Text>
      </View>

      <View tw='flex w-full max-w-screen-s100 flex-row justify-between md:justify-evenly'>
        <SquareButton
          icon={User}
          theme='candidate'
          label='Candidato'
          onPress={() => navigation.push('CandidateSignUp')}
        />

        <SquareButton
          icon={User}
          theme='requester'
          label='Solicitante'
          onPress={() => navigation.push('RequesterSignUp')}
        />
      </View>
    </AuthLayout>
  )
}

export default SignUp
