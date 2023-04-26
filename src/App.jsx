import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
import Home from './pages/Home'
import RecipesPage from './pages/RecipesPage'
import WorkoutVideos from './pages/WorkoutVideos'
import Dashboard from './pages/Dashboard'
import CardMenu from './shared/CardMenu'
//import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <CardMenu/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/workoutvideos' element={<WorkoutVideos/>}/>
              <Route path='/recipes' element={<RecipesPage/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>

          </Routes>
      
      </BrowserRouter>

      

      
      
    </div>
  )
}

export default App
