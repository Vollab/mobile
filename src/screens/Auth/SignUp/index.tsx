import { View } from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'

import UserIcon from '@src/components/assets/UserIcon'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import SquareButton from '@src/components/molecules/SquareButton'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { TRootStackScreen } from 'App'

const SignUp = ({ navigation }: TRootStackScreen<'SignUp'>) => {
  const { verticalScale } = useResponsiveScale()

  return (
    <AuthLayout nav={{ arrow: true }} navigation={navigation}>
      <View tw='max-w-screen-s100 w-full'>
        <Text size='xl' tw='text-primary-500 font-title text-center'>
          Você precisa de ajuda ou quer ajudar alguém?
        </Text>

        <Text
          tw='text-lg text-candidate-500 mt-8'
          style={{
            marginTop: verticalScale({ size: sizes[8] })
          }}
        >
          Candidato
        </Text>

        <Text>
          Criar seu próprio portfólio resolvendo problemas do mundo real!
        </Text>

        <Text
          tw='text-lg text-requester-500 mt-6'
          style={{
            marginTop: verticalScale({ size: sizes[6] })
          }}
        >
          Solicitante
        </Text>

        <Text>Encontrar voluntários para resolver problemas!</Text>
      </View>

      <View
        tw='
          flex flex-row w-full justify-between max-w-screen-s100
          md:justify-evenly
        '
        style={{
          marginTop: verticalScale({ size: sizes[8] })
        }}
      >
        <SquareButton
          theme='candidate'
          label='Candidato'
          onPress={() => navigation.push('CandidateSignUp')}
          icon={<UserIcon tw='h-8 w-8' fill={colors.secondary[500]} />}
        />

        <SquareButton
          theme='requester'
          label='Solicitante'
          onPress={() => navigation.push('RequesterSignUp')}
          icon={<UserIcon tw='h-8 w-8' fill={colors.secondary[500]} />}
        />
      </View>
    </AuthLayout>
  )
}

export default SignUp
