import { Button, Text, TouchableOpacity, View } from 'react-native'

import Google from '@src/components/atoms/Google'

export default function Form() {
  return (
    <View className='w-full h-96 flex items-center justify-center'>
      <Button title='Entrar' />

      <Button title='Cadastrar' />

      <TouchableOpacity className='flex flex-row'>
        <Google className='h-6 w-6 mr-4' />
        <Text>Entrar com o Google</Text>
      </TouchableOpacity>
    </View>
  )
}
