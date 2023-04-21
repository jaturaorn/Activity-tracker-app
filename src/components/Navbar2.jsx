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
        <nav className='bg-main-purple w-full h-20 flex items-center gap-10'>
            

            <ul className='flex flex-row justify-between items-center' >
            
            <li>Just Fit</li>

            <div className='flex justify-end gap-8'>

           
            {navMenu.map((item,i) => {
                return (
                <li key={i} className='text-white'>

                   <Link to={item.link}>{item.title}</Link>
                    
                </li>
                
                );
            })}
            </div>

            <div className='flex gap-7'>
                <Button>Log in</Button>
                <Button>Join for free</Button>
            </div>
            </ul>
            
            
        </nav>
    );
}

export default Navbar;