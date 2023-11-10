import type React from 'react'
import TodosList from '../components/TodosList.tsx'
import CreateTodoForm from '../components/CreateTodoForm.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo } from '../../todosSlice.ts'
import { type RootState } from '../../../store.ts'

export default function TodosContainer(): React.JSX.Element {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  console.log('todos', todos)

  const create = (text: string): void => {
    dispatch(
      addTodo({
        text
      })
    )
  }

  const toggle = (id: number): void => {
    console.log('toggle', id)
    dispatch(toggleTodo(id))
  }

  return (
    <div className="p-8">
      <h1 className="mb-2 text-3xl font-bold">Todos</h1>

      <CreateTodoForm createTodo={create} />
      <TodosList todos={todos} toggleTodo={toggle} />
    </div>
  )
}
