import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const Navbar = () => {
    const navMenu = [
        {title: 'Home',link: '/'},
        {title: 'Workout Videos', link: 'workoutvideos'},
        {title: 'Recipes', link: '/recipes'},
        {title: 'Dashboard', link: '/dashboard'},
    ] 
    
    return (
        <nav className='bg-main-purple w-full flex justify-center space-x-o sticky top-0'>
            <div className='container py-5'>
                <div className='flex flex-row justify-between  items-center'>
                    {/* Left section */}
                    <div className='flex items-center'>
                        <span className='text-main-pink font-extrabold text-2xl mx-0'><span className='text-white px-0'>Just</span>Fit</span>
                    </div>
                    
                    {/* Center section */}
                    <div className='flex justify-center gap-8'>
                        {navMenu.map((item, i) => {
                            return (
                                <Link key={i} to={item.link} className='text-white hover:text-gray-300 font-bold'>
                                    {item.title}
                                </Link>
                            );
                        })}
                    </div>
                    
                    {/* Right section */}
                    <div className='flex items-center gap-4'>
                        <Button >Log in</Button>
                        <Button >Join for free</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
