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
      <input
        className="flex-1 rounded border border-gray-400 p-2"
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />

      <button
        className="rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-800"
        type="submit"
      >
        Create Todo
      </button>
    </form>
  )
}
