import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface CreateTodoPayload {
  text: string
}

type TodosState = Todo[]

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as TodosState,
  reducers: {
    addTodo: (state, action: PayloadAction<CreateTodoPayload>) => {
      const id = state.length > 0 ? state[state.length - 1].id + 1 : 0

      return [...state, { id, text: action.payload.text, completed: false }]
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload)

      if (todo != null) {
        todo.completed = !todo.completed
      }

      return state
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
