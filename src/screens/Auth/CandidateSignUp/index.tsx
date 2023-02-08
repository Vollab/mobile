import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

import { Keyboard } from 'react-native'

import colors from '@src/styles/custom/colors'

import AuthLayout from '@src/components/layouts/AuthLayout'

import useAuthZoom from '@src/hooks/useAuthZoom'

import { TRootStackScreen } from 'App'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const CandidateSignUp = ({
  navigation
}: TRootStackScreen<'CandidateSignUp'>) => {
  const [step, setStep] = useState(1)

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      small_bio: '',
      full_name: '',
      occupation: '',
      experience: '',
      confirmPassword: ''
    }
  })

  const { hideHeader, nav, showInfo, removePadding } = useAuthZoom({
    arrowColor: colors.candidate[500]
  })

  const onSubmit = data => {
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
        onSubmit={() => {
          handleSubmit(onSubmit)()
          navigation.navigate('SignIn')
        }}
      />
    )
  }

  return (
    <AuthLayout
      tw={removePadding}
      navigation={navigation}
      hideHeader={hideHeader}
      nav={{
        arrow: nav.arrow,
        color: nav.color,
        onArrowClick: () => {
          if (step === 1) {
            navigation.goBack()
          } else {
            hideHeader ? Keyboard.dismiss() : setStep(prev => prev - 1)
          }
        }
      }}
    >
      {steps[step]}
    </AuthLayout>
  )
}

export default CandidateSignUp
