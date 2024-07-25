import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import { Login } from './login';
import { Home } from './home';
import { Subscribe } from './subscribe';
 
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "subscribe",
    element: <Subscribe />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
