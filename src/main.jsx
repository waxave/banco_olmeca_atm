import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CardProvider } from './context/card'
import { MessageProvider } from './context/message'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MessageProvider>
    <CardProvider>
      <App />
    </CardProvider>
  </MessageProvider>
)
