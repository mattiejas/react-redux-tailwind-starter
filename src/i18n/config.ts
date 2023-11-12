import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTodos from './en/todos.json'
import nlTodos from './nl/todos.json'

export const resources = {
  en: {
    todos: enTodos
  },
  nl: {
    todos: nlTodos
  }
} as const

void i18next.use(initReactI18next).init({
  debug: import.meta.env.DEV,
  lng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources
})
