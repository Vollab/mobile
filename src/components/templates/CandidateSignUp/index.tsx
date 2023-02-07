import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

import colors from '@src/styles/custom/colors'

import AuthLayout from '@src/components/layouts/AuthLayout'

import useAuthZoom from '@src/hooks/useAuthZoom'

import { RootStackScreen } from 'App'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const CandidateSignUp = ({
  navigation
}: RootStackScreen<'CandidateSignUp'>) => {
  const [step, setStep] = useState(1)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      small_bio: '',
      occupation: '',
      experience: '',
      confirmPassword: ''
    }
  })

  const { hideHeader, nav, showInfo, removePadding } = useAuthZoom({
    arrowColor: colors.candidate[500]
  })

  const onSubmit = data => {
    console.log('test')
    console.log(data)
  }

  const steps = {
    1: (
      <FirstStep
        control={control}
        showInfo={showInfo}
        hideHeader={hideHeader}
        onSubmit={() => {
          setStep(prev => prev + 1)
        }}
      />
    ),
    2: (
      <SecondStep
        setStep={setStep}
        control={control}
        showInfo={showInfo}
        hideHeader={hideHeader}
        onSubmit={() => {
          handleSubmit(onSubmit)()
          navigation.navigate('SignIn')
        }}
      />
    )
  }

  return (
    <AuthLayout
      nav={nav}
      className={removePadding}
      navigation={navigation}
      hideHeader={hideHeader}
    >
      {steps[step]}
    </AuthLayout>
  )
}

export default CandidateSignUp
