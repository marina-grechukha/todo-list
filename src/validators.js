import { extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

extend('email', {
  ...email,
  message: messages.email
})

extend('required', {
  ...required,
  message: messages.required
})

extend('min', {
  ...min,
  message: messages.min
})

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})
