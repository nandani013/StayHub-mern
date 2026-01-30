import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { UserContextProvider } from "./UserContext"
import { SearchProvider } from "./SearchContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

