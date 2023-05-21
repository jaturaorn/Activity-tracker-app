import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AuthProvider } from './shared/authContext'
import { ActivityProvider } from './shared/activityContext'
import { GoalProvider } from './shared/goalContext';
import { UserProvider } from './shared/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <UserProvider>
      <ActivityProvider>
        <GoalProvider>
          <App />
        </GoalProvider>
      </ActivityProvider>
    </UserProvider>
  </AuthProvider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
