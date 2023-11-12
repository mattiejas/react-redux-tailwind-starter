import { Button, Input } from '@/features/ui/components'
import { useState } from 'react'

export interface CreateTodoFormProps {
  createTodo: (text: string) => void
}

export default function CreateTodoForm({
  createTodo
}: CreateTodoFormProps): React.JSX.Element {
  const [text, setText] = useState('')

  return (
    <form
      className="flex justify-between gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        createTodo(text)
        setText('')
      }}
    >
      <Input
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />

      <Button type="submit">Create Todo</Button>
    </form>
  )
}
