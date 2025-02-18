import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './context/CartContext.jsx'
import AuthContext from './context/AuthContext.jsx'
import BadgeContext from './context/BadgeContext.jsx'



createRoot(document.getElementById('root')).render(

  <StrictMode>

   <AuthContext>
      <BadgeContext>
        <CartContext>
    
          <BrowserRouter>
    
            <App />
    
          </BrowserRouter>
    
        </CartContext>
      </BadgeContext>
   </AuthContext>

  </StrictMode>,

)
