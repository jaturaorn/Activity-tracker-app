import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react';
import { useUser } from '../shared/userContext';

function ProfileForm({handleFormVisible, userData, handleUserData}) {
    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [gender, setGender] = useState(userData.gender);
    const [height, setHeight] = useState(userData.height);
    const [weight, setWeight] = useState(userData.weight);

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleHeight= (e) => {
        setHeight(e.target.value)
    }

    const handleWeight = (e) => {
        setWeight(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newUserData = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: userData.dateOfBirth,
            gender: gender,
            height: height,
            weight: weight,
            profileImage: userData.profileImage
        }

        handleUserData(newUserData)
        setFirstName("")
        setLastName("")
        setGender("")
        setHeight("")
        setWeight("")
        handleFormVisible();
    }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
      <div className='form-container bg-white rounded-lg shadow-2xl p-8 transition-all'>
        <div>
            <h1 className='text-3xl font-bold mb-4'>My Profile</h1>
        </div>
        <div className='flex'>
            {/* form handle */}
            <form 
            className='w-full'
            onSubmit={handleSubmit}
            >

                <div className='mb-4'>
                    <input className='w-full p-2 border-2 rounded-md' type="text" value={firstName} onChange={handleFirstName} placeholder='First Name' />
                </div>
                <div className='mb-4'>
                    <input className='w-full p-2 border-2 rounded-md' type="text" value={lastName} onChange={handleLastName}  placeholder='Last Name' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="">
                        Gender
                    </label>
                    <select className='w-full p-2 border-2 rounded-md' name="" id="" onChange={handleGender}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="LGBTQ">LGBTQ</option>
                        <option value="Prefer not to tell">Others</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <input className='w-full p-2 border-2 rounded-md' value={height} onChange={handleHeight} type="number" placeholder='Height' />
                </div>
                <div className='mb-4'>
                    <input className='w-full p-2 border-2 rounded-md' value={weight} onChange={handleWeight} type="number" placeholder='Weight' />
                </div>

                <div className='flex justify-between'>
                    <button type='submit' className='p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors'>Save</button>
                    <button onClick={handleFormVisible} className='p-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 transition-colors'>Cancel</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm
