import ErrorPage from '@/pages/error.page.tsx'
import { type RouteObject } from 'react-router-dom'
import TodoListPage from '@/pages/todo-list.page.tsx'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <TodoListPage />,
    errorElement: <ErrorPage />
  }
]

export default routes
