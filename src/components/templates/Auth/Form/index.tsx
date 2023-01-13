import { Text, TouchableOpacity, View } from 'react-native'
import Button from '@src/components/atoms/Button'
import Google from '@src/components/atoms/Google'

export default function Form() {
  return (
    <View className='w-full h-64 flex px-14 items-center justify-center'>
      <Button variant='secondary'>Entrar</Button>

      <Button className='mt-6'>Cadastrar</Button>

      <TouchableOpacity className='flex flex-row mt-6'>
        <Google className='h-6 w-6 mr-4' />
        <Text>Entrar com o Google</Text>
      </TouchableOpacity>
    </View>
  )
}
