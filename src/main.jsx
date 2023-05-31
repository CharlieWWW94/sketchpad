import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma'
// import './components/LoginPanel/LoginPanel.scss'
import store from './redux/store/store.js'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import router from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
