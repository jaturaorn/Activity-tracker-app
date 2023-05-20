import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AuthProvider } from './shared/authContext'
import { ActivityProvider } from './shared/activityContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </AuthProvider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
