import React, { useState } from 'react'
import Button from '../shared/Button';
import ProfileForm from '../components/ProfileForm';
import { motion } from 'framer-motion';

function ProfilePage() {

  const [userData, setUserData] = useState({});
  const [formVisible, setFormVisible] = useState(false);
  const handleFormVisible = () => {
    setFormVisible(!formVisible);
  }

  const handleUserData = (newUserData) => {
    setUserData([newUserData])
  }

  return (
    <div className='min-h-screen'>
      <div className='flex flex-col justify-center items-center border-solid h-full'>

        <div className='flex flex-col items-center justify-center gap-6 rounded-3xl border-main-purple max-w-3xl border-2 m-6 py-10 px-20 overflow-y-auto'>
          <div>
            <h2 className='text-xl font-bold'>My Profile</h2>
          </div>
          <div className='relative inline-block'>
            {/* <img className='w-30 h-30 rounded-full' src={`${userData[0].profilePic}`} alt="Profile" /> */}
            <button id="edit-pic" className='absolute right-4 bottom-4 md:absolute md:bottom-2 md:right-6'><img className='w-5 h-5 bg-slate-300 rounded-full' src="/src/assets/camera-edit.svg" alt="" /></button>
          </div>
          <div className='flex flex-col items-start p-30'>
            {userData.map((detail) => {
              return (
                <>

                  <span id='name' className='m-4'>
                    <span className='font-bold'>Name : </span>
                    {`${detail.name} ${detail.lastName}`}
                  </span>
                  <span id='gender' className='m-4'>
                    <span className='font-bold'>Gender: </span>
                    {`${detail.gender}`}
                  </span>
                  <span id='dob' className='m-4'>
                    <span className='font-bold'>DOB: </span>
                    {`${detail.dob}`}
                  </span>
                  <span id='height' className='m-4'>
                    <span className='font-bold'>Height: </span>
                    {`${detail.height}`} cm
                  </span>
                  <span id='weight' className='m-4'>
                    <span className='font-bold'>Weight: </span>
                    {`${detail.weight}`} Kg
                  </span>
                </>

              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: formVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >

            {formVisible && <ProfileForm userData={userData} handleUserData={handleUserData} handleFormVisible={handleFormVisible} />}
          </motion.div>



          <div>
            <button className='edit-profile p-2 bg-sky-900 rounded-xl text-white transition-all hover:bg-main-pink hover:scale-125' onClick={handleFormVisible}>Edit Profile</button>
          </div>



        </div>
      </div>

    </div>
  )
}

export default ProfilePage