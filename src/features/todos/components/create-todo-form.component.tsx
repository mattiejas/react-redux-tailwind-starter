import { addTodo } from '@/features/todos/todos.slice.ts'
import { Button, Input } from '@/features/ui/components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

export default function CreateTodoForm(): React.JSX.Element {
  const { t } = useTranslation('todos')
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  return (
    <form
      className="flex justify-between gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        dispatch(
          addTodo({
            text
          })
        )
        setText('')
      }}
    >
      <Input
        placeholder={t('CREATE_TODO.PLACEHOLDER')}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />

      <Button type="submit">{t('CREATE_TODO.BUTTON')}</Button>
    </form>
  )
}
