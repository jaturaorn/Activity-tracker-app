import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import UserNav from '../shared/UserNav';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../shared/authContext';

const Navbar = () => {

  const navMenu = [
    { title: 'Home', link: '/' },
    { title: 'Videos', link: '/workoutvideos' },
    { title: 'Recipes', link: '/recipes' },
    { title: 'Dashboard', link: '/dashboard' },
  ]

  const { token } = useAuth();

  // hide menus when we active on both login or register pages.
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/register";

  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleResize = () => {
      setOpen(false);
    };

    window.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [navbarRef]);

  return (
    <nav className='bg-main-purple w-full flex justify-center space-x-o sticky top-0 z-50'>

      <div className='container py-5'>
        <div className='flex flex-row justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link to={token ? "/dashboard" : "/"}>
              <span className='text-main-pink font-extrabold text-2xl mx-0'><span className='text-white px-0'>Just</span>Fit</span>
            </Link>
          </div>

          {/* Menus */}
          <div className={`md:flex md:justify-center gap-4 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'flex flex-col bg-main-pink top-20 ' : 'top-[-490px]'}`}>
            {/* {!token ? navMenu.map((item, i) => {
              return (
                <Link
                  key={i}
                  to={item.link}
                  className={`text-white text-l ${open ? 'hover:text-black font-bold' : 'hover:text-gray-300 font-bold '}`}>
                  {item.title}
                </Link>
              );
            }) : null} */}

            {token ? <Link to="/dashboard" className={`text-white text-l ${open ? 'hover:text-black font-bold' : 'hover:text-gray-300 font-bold '}`}>Dashboard</Link> : null}
            {(isLoginPage || isSignUpPage || token) ? null : <Link to="/" className={`text-white text-l ${open ? 'hover:text-black font-bold' : 'hover:text-gray-300 font-bold '}`}>Home</Link>}

            {(isLoginPage || isSignUpPage) && !token ?
              null
              :
              <>

                <Link to="/workoutvideos" className={`text-white text-l ${open ? 'hover:text-black font-bold' : 'hover:text-gray-300 font-bold '}`}>Videos</Link>
                <Link to="recipes" className={`text-white text-l ${open ? 'hover:text-black font-bold' : 'hover:text-gray-300 font-bold '}`}>Recipes</Link>
              </>
            }


            {/* Nav Mobile */}
            {
              token ?
                <div className='md:hidden'>
                  <Link to={"/profile"} className='text-white hover:text-black font-bold'>Profile</Link>
                </div>
                :
                <div className='md:hidden'>
                  {!isLoginPage ? <Link to="/login"> <Button >Log in</Button></Link> : <Link to="/register"><Button >Join for free</Button></Link>}
                </div>
            }
          </div>

          {/* Right section desktop menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: UserNav ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {token ?
              <div className='hidden md:flex items-center gap-4'>
                <UserNav />
              </div> :
              <>
                {/* <Link to="/login"> <Button >Log in</Button></Link>
                <Link to="/register"><Button >Join for free</Button></Link> */}
                  {!isLoginPage ? <Link to="/login"> <Button >Log in</Button></Link> : null}
                  {!isSignUpPage ? <Link to="/register"><Button >Join for free</Button></Link> : null}
              </>
            }
          </motion.div>


          <div className='md:hidden'>
            <div id='nav-repsonsive' className=' w-10 h-10 md:hidden'>
              <button onClick={() => setOpen(!open)}><img className='' src={`${open ? 'src/assets/cross-circle-svgrepo-com (1).svg' : 'src/assets/align-justify-svgrepo-com (2).svg'}`} /></button>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;