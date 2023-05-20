import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AuthProvider } from './shared/authContext'
import { ActivityProvider } from './shared/activityContext'
import { GoalProvider } from './shared/goalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ActivityProvider>
      <GoalProvider>
        <App />
      </GoalProvider>
    </ActivityProvider>
  </AuthProvider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
