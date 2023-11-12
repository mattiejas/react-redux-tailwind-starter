import type React from 'react'
import TodoList from '../components/todo-list.component.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo } from '../todos.slice.ts'
import { type RootState } from '../../../store.ts'
import CreateTodoForm from '../components/create-todo-form.component.tsx'

export default function TodosContainer(): React.JSX.Element {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  const create = (text: string): void => {
    dispatch(
      addTodo({
        text
      })
    )
  }

  const toggle = (id: number): void => {
    dispatch(toggleTodo(id))
  }

  return (
    <div className="p-8">
      <h1 className="mb-2 text-3xl font-bold">Todos</h1>

      <CreateTodoForm createTodo={create} />
      <TodoList todos={todos} toggleTodo={toggle} />
    </div>
  )
}
