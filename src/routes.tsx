import TodoListPage from './pages/todo-list.page.tsx'
import ErrorPage from './pages/error.page.tsx'
import { type RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <TodoListPage />,
    errorElement: <ErrorPage />
  }
]

export default routes
