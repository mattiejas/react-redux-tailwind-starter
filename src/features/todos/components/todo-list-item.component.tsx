import { type Todo } from '@/features/todos/todos.slice.ts'
import { Button } from '@/features/ui/components'
import { cn } from '@/lib/utils.ts'
import type React from 'react'
import { TiDelete } from 'react-icons/ti'

export interface TodoListItemProps {
  todo: Todo
  toggleTodo: () => void
  deleteTodo: () => void
}

export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo
}: TodoListItemProps): React.JSX.Element {
  return (
    <li
      key={todo.id}
      onClick={toggleTodo}
      className={cn(
        'group flex h-14 cursor-pointer items-center justify-between rounded-lg px-4 py-3 hover:bg-slate-200',
        todo.completed ? 'bg-slate-50 font-bold' : 'bg-slate-100'
      )}
    >
      <span>
        <input
          readOnly
          checked={todo.completed}
          type="checkbox"
          className="mr-2"
        />
        <span className={cn({ 'line-through': todo.completed })}>
          {todo.text}
        </span>
      </span>

      <Button
        onClick={(e) => {
          e.stopPropagation()
          deleteTodo()
        }}
        size="icon"
        className="hidden group-hover:flex"
        variant="ghost"
      >
        <TiDelete className="h-6 w-6 text-red-600" />
      </Button>
    </li>
  )
}
