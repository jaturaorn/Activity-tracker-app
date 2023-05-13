import { Link, useLocation } from 'react-router-dom';
import Button from '../shared/Button';
import UserNav from '../shared/UserNav';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const navMenu = [
        { title: 'Home', link: '/' },
        { title: 'Videos', link: 'workoutvideos' },
        { title: 'Recipes', link: '/recipes' },
        { title: 'Dashboard', link: '/dashboard' },
    ]
    //react hook to set wheter login is true or false
    const [login, setLogin] = useState(true)

    // hide menus when we active on both login or register pages.
    const location = useLocation();
    const hideNavbarRoutes = ['/login', '/register']; 
    const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

    const [open, setOpen] = useState(false);
    const navbarRef = useRef(null)
    console.log(open);

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
                    {/* Left section */}
                    <div className='flex items-center'>
                        <Link to={'/'}>
                            <span className='text-main-pink font-extrabold text-2xl mx-0'><span className='text-white px-0'>Just</span>Fit</span>
                        </Link>
                    </div>

                    {/* Center section */}
                    <div className={`md:flex md:justify-center gap-4 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'flex flex-col bg-main-pink top-20 ' : 'top-[-490px]'}`}>
                    {shouldShowNavbar ?
                        navMenu.map((item, i) => {
                            return (
                                <Link
                                    key={i}
                                    to={item.link}
                                    className={`text-white ${open ? 'hover:text-black font-bold' : 'hover:text-gray-300 font-bold'}`}>
                                    {item.title}
                                </Link>
                            );
                        })
                    : null}
                        {
                        !login ? 
                        <div className='md:hidden'>
                            <Link to="/login"> <Button >Log in</Button></Link>
                            <Link to="/register"><Button >Join for free</Button></Link>
                        </div>
                        : 
                        <div className='md:hidden'>
                                <Link to={"/profile"}>Profile</Link>
                        </div>
                        }
                        
                        
                    </div>

                    {/* Right section */}
                    { !login ?  <div className='hidden md:flex items-center gap-4'>

                            <Link to="/login"> <Button >Log in</Button></Link>
                            <Link to="/register"><Button >Join for free</Button></Link>

                    </div> : <UserNav/>}
                   

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
