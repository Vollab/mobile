import { ScrollView } from 'react-native'

import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'
import Steps from '@src/components/molecules/Steps'

import useAuthForm from '@src/hooks/useAuthForm'

import { RootStackScreen } from 'App'

const CandidateSecondStep = ({
  navigation
}: RootStackScreen<'CandidateSecondStep'>) => {
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
          <Steps steps={[true, true]} />

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
      </RelativeScrollView>
    </AuthLayout>
  )
}

export default CandidateSecondStep
