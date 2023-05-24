import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RecipesPage from './pages/RecipesPage'
import WorkoutVideos from './pages/WorkoutVideos'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from "./pages/Register"
import ProfilePage from './pages/ProfilePage'
import ErrorBoundary from "./pages/ErrorBoundary"
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import ProtectedRoute from "./shared/ProtectedRoute"
import { useAuth } from './shared/authContext'

function App() {
  const { token } = useAuth();

  return (
    <div className="App ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {/* <BrowserRouter>

        >
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workoutvideos' element={<WorkoutVideos />} />
            <Route path='/recipes' element={<RecipesPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
          <Footer />
        </BrowserRouter> */}

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workoutvideos' element={<WorkoutVideos />} />
            <Route path='/recipes' element={<RecipesPage />} />
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/recipes/:name" element={<RecipeDetail/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<ErrorBoundary />} />
          </Routes>

          <Footer />
        </BrowserRouter>

        {/* 

// check token
// role base store in context then
// redirect 

*/}

      </motion.div>
    </div>
  )
}

export default App

