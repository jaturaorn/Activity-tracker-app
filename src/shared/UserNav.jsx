import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from './firebase.js';
import { useUser } from './userContext.jsx';
import defaultProfile from "../assets/defaultprofile2.png"

function UserNav() {

  const user = useUser();
  console.log("UserNav test get user", user);

  //if image = true then show user img
  //else show svg person
  //type button
  //userImg
  // const userNavBar = [
  //   { title: 'My Profile', link: "/profile" },
  //   { title: 'Log out', link: "/" }
  // ]

  //check wheter the state that is sent to the front end has image or not
  const [userimg, setImg] = useState(true)

  //mini usernav bar when it is clicked it will show dropdown mini nav-bar of user
  const [userNav, setUserNav] = useState(false)

  function handleClick() {
    setUserNav(!userNav);
  }

  function handleLogout() {
    signOut(firebaseAuth).then(() => {
      console.log("Sign Out.");
    })

    // console.log("Navigate to Home page.");
  }

  function handleMouseEnter() {
    setUserNav(true);
  }

  function handleMoueLeave() {
    setUserNav(false);
  }


  return (
    <>
      <div className='hidden md:flex flex-col justify-center items-center'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMoueLeave}
      >
        <button onClick={handleClick}>
          {
            !userimg ?

              <img className="w-10 h-10" src="/src/assets/person-round.svg" alt=""
              />

              :

              <img className="w-10 h-10 bg-white rounded-full border-solid border-2" src={!user.profileImage ? defaultProfile : user.profileImage} alt="" />
          }
        </button>



        <AnimatePresence>
          {userNav && (
            <motion.div className='absolute mt-2 w-48 top-full rounded-lg shadow-2xl bg-white border-solid border-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className='py-1'>
                {/* {userNavBar.map((ele) => {
                        return(
                            <Link to={ele.link} className='block px-4 py-2 bg-gray hover:bg-gray-100'>
                                {ele.title}
                            </Link>
                        );
                    })} */}
                <Link className='block px-4 py-2 bg-gray hover:bg-gray-100' to="/profile" >My Profile</Link>
                <Link className='block px-4 py-2 bg-gray hover:bg-gray-100' onClick={handleLogout}>Log out</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default UserNav