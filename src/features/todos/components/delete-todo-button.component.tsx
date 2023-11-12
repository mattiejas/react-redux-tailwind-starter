import { Button } from '@/features/ui/components'
import { type JSX } from 'react'
import { TiDelete } from 'react-icons/ti'
import { useDispatch } from 'react-redux'

import { deleteTodo } from '../todos.slice.ts'

export interface DeleteTodoButtonProps {
  id: number
}

export default function DeleteTodoButton({
  id
}: DeleteTodoButtonProps): JSX.Element {
  const dispatch = useDispatch()

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation()
        dispatch(deleteTodo(id))
      }}
      size="icon"
      className="hidden group-hover:flex"
      variant="ghost"
    >
      <TiDelete className="h-6 w-6 text-red-600" />
    </Button>
  )
}
