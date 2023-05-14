import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RecipesPage from './pages/RecipesPage'
import WorkoutVideos from './pages/WorkoutVideos'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from "./pages/Register"
import ProfilePage from './pages/ProfilePage'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/workoutvideos' element={<WorkoutVideos/>}/>
              <Route path='/recipes' element={<RecipesPage/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/profile' element={<ProfilePage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
