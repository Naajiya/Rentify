import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './context/CartContext.jsx'
import AuthContext from './context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(

  <StrictMode>

   <AuthContext>
      <CartContext>
  
        <BrowserRouter>
  
          <App />
  
        </BrowserRouter>
  
      </CartContext>
   </AuthContext>

  </StrictMode>,

)
