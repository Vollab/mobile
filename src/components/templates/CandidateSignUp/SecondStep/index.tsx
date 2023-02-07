import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'
import Steps from '@src/components/molecules/Steps'

const SecondStep = ({ control, hideHeader, showInfo, onSubmit, setStep }) => (
  <>
    {showInfo && (
      <>
        <Steps
          steps={[
            { active: true, onPress: () => setStep(prev => prev - 1) },
            { active: true }
          ]}
        />

        <Text className='text-xl w-full text-candidate-500 max-w-screen-s100  md:text-center'>
          Quase lá
        </Text>

        <Text className='w-full mb-6 max-w-screen-s100 md:text-center'>
          Não se preocupe algumas informações poderão ser alteradas
          posteriormente
        </Text>
      </>
    )}

    <RelativeScrollView
      className='w-full'
      contentContainerStyle={{ height: hideHeader ? '100%' : 'auto' }}
    >
      <Field
        control={control}
        name='small_bio'
        placeholder='Pequena descrição'
        className='mb-4'
      />
      <Field
        control={control}
        name='occupation'
        placeholder='Área de atuação'
        className='mb-4'
      />
      <Field
        control={control}
        name='experience'
        placeholder='Nível de experiência'
        className='mb-6'
      />

      <Button className='bg-candidate-500' onPress={onSubmit}>
        Concluir cadastro
      </Button>
    </RelativeScrollView>
  </>
)

export default SecondStep
