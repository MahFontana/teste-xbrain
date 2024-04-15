
import React from 'react'
import ReactDOM from 'react-dom/client'

import './pages/pageProduct.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageProduto from './pages/pageProdutos.jsx'
import PageFinalization from './pages/pageFinalization.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageProduto />

  }
  , {
    path: "/finalization",
    element: <PageFinalization/>

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)



