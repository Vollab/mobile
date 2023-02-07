import colors from '@src/styles/custom/colors'

import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field, { IFieldProps } from '@src/components/molecules/Field'

import useAuthZoom from '@src/hooks/useAuthZoom'

import { RootStackScreen } from 'App'
import { useForm } from 'react-hook-form'

const RequesterField = ({ ...props }: IFieldProps) => (
  <Field
    className={`
      focus:border-requester-500 focus:text-requester-500
      active:border-requester-600
    `}
    {...props}
  />
)

const RequesterSignUp = ({
  navigation
}: RootStackScreen<'RequesterSignUp'>) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: '', password: '', name: '', confirmPassword: '' }
  })
  const { hideHeader, nav, showInfo, removePadding } = useAuthZoom({
    arrowColor: colors.requester[500]
  })

  const onSubmit = data => console.log(data)

  return (
    <AuthLayout
      nav={nav}
      navigation={navigation}
      hideHeader={hideHeader}
      className={removePadding}
    >
      {showInfo && (
        <>
          <Text className='text-xl w-full  max-w-screen-s100 text-requester-500 md:text-center'>
            Solicitante
          </Text>

          <Text className='w-full max-w-screen-s100 mb-6 md:text-center'>
            Encontrar voluntários para resolver problemas!
          </Text>
        </>
      )}

      <RelativeScrollView
        className='w-full'
        contentContainerStyle={{ height: hideHeader ? '100%' : 'auto' }}
      >
        <RequesterField
          name='name'
          control={control}
          placeholder='Nome completo'
          className='mb-4'
          rules={{
            minLength: { message: 'Nome inválido!', value: 3 },
            required: {
              message: 'Necessário informar o Nome completo!',
              value: true
            },
            pattern: {
              message: 'Nome inválido!',
              value: /^[a-z\u00C0-\u00FF]+(\s([a-z\u00C0-\u00FF])+)+/i
            },
            maxLength: {
              value: 255,
              message: 'Limite de 255 caracteres excedido.'
            }
          }}
        />

        <RequesterField
          name='email'
          control={control}
          placeholder='E-mail'
          className='mb-4'
          rules={{
            maxLength: {
              value: 255,
              message: 'Limite máximo de 255 caracteres excedido.'
            },
            required: {
              message: 'Necessário informar o E-mail!',
              value: true
            },
            pattern: {
              message: 'E-mail inválido!',
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{1,10}@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
          }}
        />

        <RequesterField
          name='password'
          control={control}
          placeholder='Senha'
          className='mb-4'
        />

        <RequesterField
          control={control}
          name='confirmPassword'
          placeholder='Confirmar senha'
          className='mb-6'
        />

        <Button
          className='bg-requester-500 md:mt-0'
          onPress={() => {
            handleSubmit(onSubmit)()
            navigation.navigate('SignIn')
          }}
        >
          Concluir cadastro
        </Button>
      </RelativeScrollView>
    </AuthLayout>
  )
}

export default RequesterSignUp
