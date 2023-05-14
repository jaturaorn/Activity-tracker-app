import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function UserNav() {
    //if image = true then show user img
    //else show svg person
    //type button
    //userImg
    const userNavBar = [
        {title: 'My Profile', link:"/profile"},
        {title: 'Log out', link:"/"}
    ]

    //mock image for test
    const imgs = "/src/image/karina-user.jpg";

    //check wheter the state that is sent to the front end has image or not
    const [userimg, setImg] = useState(true)

    //mini usernav bar when it is clicked it will show dropdown mini nav-bar of user
    const [userNav, setUserNav] = useState(false)

    function handleClick() {
        setUserNav(!userNav);
    }

    
  return (
    <>
        <div className='hidden md:flex flex-col justify-center items-center'>
        <button onClick={handleClick}>
        {
        !userimg ?
        
            <img className="w-10 h-10" src="/src/assets/person-round.svg" alt="" 
            />
        
        :
       
            <img className="w-10 h-10 rounded-full border-solid border-2" src={imgs} alt="" />
        }
        </button>
        
        { userNav && 
            <div className='absolute mt-2 w-48 top-full rounded-lg shadow-2xl bg-white border-solid border-2'>
                <div className='py-1'>
                    {userNavBar.map((ele) => {
                        return(
                            <Link to={ele.link} className='block px-4 py-2 bg-gray hover:bg-gray-100'>
                                {ele.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        }
        
        
        </div>
       
    </>
    

    
  )
}

export default UserNav