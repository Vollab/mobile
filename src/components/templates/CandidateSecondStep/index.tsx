import { ScrollView } from 'react-native'

import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import useAuthForm from '@src/hooks/useAuthForm'

import { RootStackScreen } from 'App'

const CandidateSecondStep = ({
  navigation
}: RootStackScreen<'CandidateSecondStep'>) => {
  const { hideHeader, nav, showInfo, removePadding } = useAuthForm()

  return (
    <AuthLayout
      nav={nav}
      navigation={navigation}
      hideHeader={hideHeader}
      className={removePadding}
    >
      {showInfo && (
        <>
          <Text className='text-xl w-full text-candidate-500'>Quase lá</Text>

          <Text className='w-full mb-6'>
            Não se preocupe algumas informações poderão ser alteradas
            posteriormente
          </Text>
        </>
      )}

      <ScrollView>
        <Field placeholder='Pequena descrição' className='mb-4' />
        <Field placeholder='Área de atuação' className='mb-4' />
        <Field placeholder='Nível de experiência' className='mb-6' />
        <Button
          className='bg-candidate-500'
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        >
          Concluir cadastro
        </Button>
      </ScrollView>
    </AuthLayout>
  )
}

export default CandidateSecondStep
