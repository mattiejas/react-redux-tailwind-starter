import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './i18n/config.ts'
import './index.css'
import routes from './routes.tsx'
import { persistor, store } from './store.ts'

const router = createBrowserRouter(routes)

const rootEl = document.getElementById('root')

if (rootEl === null) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
