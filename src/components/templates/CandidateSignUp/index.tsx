import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'
import Steps from '@src/components/molecules/Steps'

import useAuthForm from '@src/hooks/useAuthForm'

import { RootStackScreen } from 'App'
import React from 'react'

const CandidateSignUp = ({
  navigation
}: RootStackScreen<'CandidateSignUp'>) => {
  const { hideHeader, nav, showInfo, removePadding } = useAuthForm({})

  return (
    <AuthLayout
      nav={nav}
      navigation={navigation}
      hideHeader={hideHeader}
      className={removePadding}
    >
      {showInfo && (
        <>
          <Steps steps={[true, false]} />

          <Text className='w-full text-xl max-w-screen-s100  text-candidate-500 md:text-center'>
            Candidato
          </Text>

          <Text className='w-full mb-6  max-w-screen-s100  md:text-center'>
            Encontrar voluntários para resolver problemas!
          </Text>
        </>
      )}

      <RelativeScrollView
        className='w-full'
        contentContainerStyle={{ height: hideHeader ? '100%' : 'auto' }}
      >
        <Field placeholder='Nome completo' className='mb-4' />
        <Field placeholder='E-mail' className='mb-4' />
        <Field placeholder='Senha' className='mb-4' />
        <Field placeholder='Confirmar senha' className='mb-6' />

        <Button
          className='bg-candidate-500'
          onPress={() => {
            navigation.navigate('CandidateSecondStep')
          }}
        >
          Próximo passo
        </Button>
      </RelativeScrollView>
    </AuthLayout>
  )
}

export default CandidateSignUp
