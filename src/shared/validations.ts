import { ControllerProps } from 'react-hook-form'

export const fullNameValidation: ControllerProps['rules'] = {
  minLength: { message: 'Nome inválido!', value: 3 },
  maxLength: { value: 255, message: 'Limite de 255 caracteres excedido!' },
  required: { value: true, message: 'Necessário informar o Nome completo!' },
  pattern: {
    message: 'Nome inválido!',
    value: /^[a-z\u00C0-\u00FF]+(\s([a-z\u00C0-\u00FF])+)+/i
  }
}

export const emailValidation: ControllerProps['rules'] = {
  maxLength: {
    value: 255,
    message: 'Limite máximo de 255 caracteres excedido!'
  },
  required: { value: true, message: 'Necessário informar o E-mail!' },
  pattern: {
    message: 'E-mail inválido!',
    value:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  }
}

export const passwordValidation: ControllerProps['rules'] = {
  required: { value: true, message: 'Necessário informar a senha!' },
  min: { value: 8, message: 'Suas senha deve conter mais que 8 caracteres!' },
  maxLength: {
    value: 255,
    message: 'Limite máximo de 255 caracteres excedido!'
  },
  pattern: {
    message: `Senha muito fraca!\nA senha deve conter: \n\n▸ Símbolo \n▸ Número \n▸ Letra minúscula \n▸ Letra maiúscula`,
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/
  }
}

export const confirmPasswordValidation: ControllerProps['rules'] = {
  required: { value: true, message: 'Necessário confirmar a senha!' },
  maxLength: {
    value: 255,
    message: 'Limite máximo de 255 caracteres excedido!'
  },
  validate: (value, formValue) =>
    value !== formValue?.password ? 'As senhas devem ser iguais!' : false
}
