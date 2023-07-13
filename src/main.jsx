import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from '../page/home/Home'
import Project from '../page/Project/Project'
import './index.css'

const Routers = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Project",
        element:<Project/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routers}/>
  </React.StrictMode>,
)
