import CreateTodoForm from '@/features/todos/components/create-todo-form.component.tsx'
import TodoList from '@/features/todos/components/todo-list.component.tsx'
import { type RootState } from '@/store.ts'
import type React from 'react'
import { useSelector } from 'react-redux'

export default function TodoListPage(): React.JSX.Element {
  const todos = useSelector((state: RootState) => state.todos)
  return (
    <div className="p-8">
      <h1 className="mb-2 text-3xl font-bold">Todos</h1>

      <CreateTodoForm />
      <TodoList todos={todos} />
    </div>
  )
}
