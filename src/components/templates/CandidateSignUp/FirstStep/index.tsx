import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'
import Steps from '@src/components/molecules/Steps'

const FirstStep = ({ control, hideHeader, showInfo, onSubmit }) => (
  <>
    {showInfo && (
      <>
        <Steps steps={[{ active: true }, { active: false }]} />

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
      <Field
        control={control}
        name='name'
        placeholder='Nome completo'
        className='mb-4'
      />

      <Field
        control={control}
        name='email'
        placeholder='E-mail'
        className='mb-4'
      />

      <Field
        control={control}
        name='password'
        placeholder='Senha'
        className='mb-4'
      />

      <Field
        control={control}
        name='confirmPassword'
        placeholder='Confirmar senha'
        className='mb-6'
      />

      <Button className='bg-candidate-500' onPress={onSubmit}>
        Próximo passo
      </Button>
    </RelativeScrollView>
  </>
)

export default FirstStep
