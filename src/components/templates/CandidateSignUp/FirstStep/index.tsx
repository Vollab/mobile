import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'
import Steps from '@src/components/molecules/Steps'

import {
  confirmPasswordValidation,
  emailValidation,
  fullNameValidation,
  passwordValidation
} from '@src/shared/validations'

const FirstStep = ({ control, hideHeader, showInfo, onSubmit }) => (
  <>
    {showInfo && (
      <>
        <Steps steps={[{ active: true }, { active: false }]} />

        <Text tw='w-full text-xl max-w-screen-s100  text-candidate-500 md:text-center'>
          Candidato
        </Text>

        <Text tw='w-full mb-6  max-w-screen-s100  md:text-center'>
          Encontrar voluntários para resolver problemas!
        </Text>
      </>
    )}

    <RelativeScrollView
      contentContainerStyle={{ height: hideHeader ? '100%' : 'auto' }}
      tw='w-full'
    >
      <Field
        name='full_name'
        control={control}
        theme='candidate'
        placeholder='Nome completo'
        rules={fullNameValidation}
        tw='mb-4'
      />

      <Field
        name='email'
        control={control}
        theme='candidate'
        placeholder='E-mail'
        rules={emailValidation}
        tw='mb-4'
      />

      <Field
        name='password'
        control={control}
        theme='candidate'
        placeholder='Senha'
        secureTextEntry={true}
        rules={passwordValidation}
        tw='mb-4'
      />

      <Field
        control={control}
        theme='candidate'
        secureTextEntry={true}
        name='confirmPassword'
        placeholder='Confirmar senha'
        rules={confirmPasswordValidation}
        tw='mb-6'
      />

      <Button tw='bg-candidate-500' onPress={onSubmit}>
        Próximo passo
      </Button>
    </RelativeScrollView>
  </>
)

export default FirstStep
