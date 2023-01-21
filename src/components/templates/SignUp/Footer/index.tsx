import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'

import theme from '@src/styles/theme'

import Text from '@src/components/atoms/Text'
import UserIcon from '@src/components/icons/UserIcon'

export default function Footer() {
  return (
    <View className='w-full h-116'>
      <KeyboardAvoidingView
        behavior='padding'
        className='relative pt-3 z-20 w-full h-full px-8 flex flex-col '
      >
        <Text className='text-xl text-primary-500 font-semibold'>
          Você precisa de ajuda ou quer ajudar alguém?
        </Text>

        <Text className='text-lg w-full text-candidate-500 mt-8'>
          Candidato
        </Text>

        <Text className='w-full'>
          Criar seu próprio portfólio resolvendo problemas do mundo real!
        </Text>

        <Text className='text-lg w-full text-requester-500 mt-6'>
          Solicitante
        </Text>

        <Text className='w-full'>
          Encontrar voluntários para resolver problemas!
        </Text>

        <View className='flex flex-row w-full justify-between mt-8'>
          <TouchableOpacity className='flex flex-col h-32 w-32 rounded-xl items-center justify-center bg-candidate-500'>
            <UserIcon className='h-8 w-8' fill={theme.secondary[500]} />

            <Text className='text-secondary-500 mt-4 text-lg'>Candidato</Text>
          </TouchableOpacity>

          <TouchableOpacity className='flex flex-col h-32 w-32 rounded-xl items-center justify-center bg-requester-500'>
            <UserIcon className='h-8 w-8' fill={theme.secondary[500]} />

            <Text className='text-secondary-500 mt-4 text-lg'>Solicitante</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
