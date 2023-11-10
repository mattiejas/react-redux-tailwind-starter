import { type Todo } from '../../todosSlice.ts'
import classNames from 'classnames'

export interface TodosListProps {
  todos: Todo[]
  toggleTodo: (id: number) => void
}
export default function TodosList({
  todos,
  toggleTodo
}: TodosListProps): React.JSX.Element {
  return (
    <div>
      <h2 className="my-3 text-2xl font-bold">Todo List</h2>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => {
              toggleTodo(todo.id)
            }}
            className={classNames(
              'cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-200',
              todo.completed ? 'white font-bold line-through' : 'bg-slate-100'
            )}
          >
            <input
              readOnly
              checked={todo.completed}
              type="checkbox"
              className="mr-2"
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
