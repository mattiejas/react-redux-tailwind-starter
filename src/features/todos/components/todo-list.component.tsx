import TodoListItem from '@/features/todos/components/todo-list-item.component.tsx'
import { type Todo } from '../todos.slice.ts'

export interface TodosListProps {
  todos: Todo[]
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo
}: TodosListProps): React.JSX.Element {
  return (
    <div>
      <h2 className="my-3 text-2xl font-bold">Todo List</h2>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            toggleTodo={() => {
              toggleTodo(todo.id)
            }}
            deleteTodo={() => {
              deleteTodo(todo.id)
            }}
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
