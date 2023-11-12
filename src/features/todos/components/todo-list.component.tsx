import TodoListItem from '@/features/todos/components/todo-list-item.component.tsx'
import { useDispatch } from 'react-redux'
import { type Todo, toggleTodo } from '../todos.slice.ts'

export interface TodosListProps {
  todos: Todo[]
}

export default function TodoList({ todos }: TodosListProps): React.JSX.Element {
  const dispatch = useDispatch()

  const toggle = (id: number): (() => void) => {
    return () => dispatch(toggleTodo(id))
  }

  return (
    <div>
      <h2 className="my-3 text-2xl font-bold">Todo List</h2>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggle(todo.id)}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center italic text-gray-500">
          Create an item to get started.
        </p>
      )}
    </div>
  )
}
