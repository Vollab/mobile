import { View } from 'react-native'

import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'
import Dropdown from '@src/components/molecules/Select'
import Steps from '@src/components/molecules/Steps'

import { useState } from 'react'

const SecondStep = ({ control, hideHeader, showInfo, onSubmit, setStep }) => {
  const [experience, setExperience] = useState(null)
  const [occupation, setOccupation] = useState(null)

  return (
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

      <View className='w-full'>
        <Field
          name='small_bio'
          control={control}
          theme='candidate'
          placeholder='Pequena descrição'
          rules={{
            maxLength: {
              value: 20,
              message: 'Limite de 20 caracteres excedido!'
            },
            pattern: {
              value: /^[a-z\u00C0-\u00FF]$/i,
              message: 'Texto contêm caracteres inválidos!'
            }
          }}
          className='mb-4'
        />

        <Dropdown
          theme='candidate'
          value={occupation}
          setValue={setOccupation}
          placeholder='Área de atuação'
          items={[
            { label: 'Desenvolvedor Back-end', value: 'backend' },
            { label: 'Desenvolvedor Front-end', value: 'frontend' },
            { label: 'Desenvolvedor Full-stack', value: 'fullstack' }
          ]}
          className='mb-6'
        />

        <Dropdown
          theme='candidate'
          value={experience}
          setValue={setExperience}
          placeholder='Nível de experiência'
          items={[
            { label: 'Iniciante', value: 'beginner' },
            { label: 'Intermediário', value: 'intermediary' },
            { label: 'Avançado', value: 'advanced' }
          ]}
          className='mb-6'
        />

        <Button className='bg-candidate-500' onPress={onSubmit}>
          Concluir cadastro
        </Button>
      </View>
    </>
  )
}

export default SecondStep
