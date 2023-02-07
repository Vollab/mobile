import { BackHandler, TouchableOpacity } from 'react-native'

import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import useAuthZoom from '@src/hooks/useAuthZoom'
import useKeyboardStatus from '@src/hooks/useKeyboardStatus'

import { useFocusEffect } from '@react-navigation/native'
import { RootStackScreen } from 'App'
import Checkbox from 'expo-checkbox'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

const SignIn = ({ navigation }: RootStackScreen<'SignIn'>) => {
  const { isKeyboardVisible } = useKeyboardStatus()
  const { control, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' }
  })
  const { nav, removePadding } = useAuthZoom({
    onBackButtonClick: () => {
      navigation.navigate('AuthSelect')
    }
  })

  const onSubmit = data => console.log(data)

  useFocusEffect(
    useCallback(() => {
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          navigation.push('AuthSelect')
          return true
        }
      )

      return () => subscription.remove()
    }, [])
  )

  return (
    <AuthLayout
      nav={nav}
      navigation={navigation}
      className={removePadding}
      headerTitle={
        isKeyboardVisible ? '' : 'Construa seu portfólio ajudando pessoas'
      }
    >
      <RelativeScrollView className='w-full'>
        <Field
          className='mb-4'
          name='email'
          control={control}
          placeholder='E-mail'
        />

        <Field
          name='password'
          className='mb-4'
          control={control}
          placeholder='Senha'
        />

        <TouchableOpacity className='flex flex-row items-center justify-center mb-4'>
          <Checkbox className='mr-4' />
          <Text className='text-sm'>Lembrar senha</Text>
        </TouchableOpacity>

        <Button className='mb-3' onPress={handleSubmit(onSubmit)}>
          Entrar
        </Button>

        <TouchableOpacity className='mb-3 flex flex-row justify-center'>
          <Text className='text-sm'>Esqueci minha senha</Text>
        </TouchableOpacity>
      </RelativeScrollView>
    </AuthLayout>
  )
}

export default SignIn
