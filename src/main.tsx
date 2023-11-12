import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { persistor, store } from './store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes.tsx'

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
