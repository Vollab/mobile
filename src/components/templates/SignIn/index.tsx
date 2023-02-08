import { BackHandler, TouchableOpacity, View } from 'react-native'

import colors from '@src/styles/custom/colors'

import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import useAuthZoom from '@src/hooks/useAuthZoom'
import useKeyboardStatus from '@src/hooks/useKeyboardStatus'

import { useFocusEffect } from '@react-navigation/native'
import { emailValidation } from '@src/shared/validations'
import { RootStackScreen } from 'App'
import Checkbox from 'expo-checkbox'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

interface ISignInRequest {
  email: string
  password: string
  remember: boolean
}

type TSignInForm = Omit<ISignInRequest, 'remember'>

const SignIn = ({ navigation }: RootStackScreen<'SignIn'>) => {
  const [remember, setRemember] = useState(false)
  const { isKeyboardVisible } = useKeyboardStatus()
  const { control, handleSubmit } = useForm<TSignInForm>({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur'
  })
  const { nav, removePadding } = useAuthZoom({
    onBackButtonClick: () => {
      navigation.navigate('AuthSelect')
    }
  })

  const onSubmit = (data: ISignInRequest) => {
    console.log({ ...data, remember })
  }

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
          rules={emailValidation}
        />

        <Field
          name='password'
          className='mb-4'
          control={control}
          placeholder='Senha'
          secureTextEntry={true}
          rules={{
            maxLength: {
              value: 255,
              message: 'Limite máximo de 255 caracteres excedido!'
            },
            required: { value: true, message: 'Necessário informar a Senha!' }
          }}
        />

        <View className='flex flex-row items-center justify-center mb-4'>
          <Checkbox
            className='mr-4'
            value={remember}
            onValueChange={setRemember}
            color={colors.primary[500]}
          />

          <TouchableOpacity onPress={() => setRemember(prev => !prev)}>
            <Text className='text-sm'>Lembrar senha</Text>
          </TouchableOpacity>
        </View>

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
