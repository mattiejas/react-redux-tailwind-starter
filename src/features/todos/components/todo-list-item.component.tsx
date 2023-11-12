import DeleteTodoButton from '@/features/todos/components/delete-todo-button.component.tsx'
import { type Todo } from '@/features/todos/todos.slice.ts'
import { cn } from '@/lib/utils.ts'
import type React from 'react'

export interface TodoListItemProps {
  todo: Todo
  toggleTodo: () => void
}

export default function TodoListItem({
  todo,
  toggleTodo
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

      <DeleteTodoButton id={todo.id} />
    </li>
  )
}
