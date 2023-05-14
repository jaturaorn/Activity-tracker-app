import React, { useState } from 'react'
import Button from '../shared/Button';

function ProfilePage() {

    const mockData = [{
    name: "Karinaxxxxx" , 
    lastName: "Aespaxxxxxx", 
    gender: "F", 
    dob: "21/09/1996",  //calendar
    height: "167", 
    weight:"47",
    profilePic: "/src/image/karina-user.jpg" //url
}]

const [formToggle, setFormToggle] = useState(false);
  return (
    <div>
        <div className='flex flex-col justify-center items-center border-solid h-full '>
                        
            <div className='flex flex-col items-center justify-center gap-6 rounded-3xl border-main-purple max-w-3xl border-2 m-6 py-10 px-20'>
                    <div>
                        <h2 className='text-xl font-bold'>My Profile</h2>
                    </div>
                    <div className='relative inline-block'>
                                        <img className='w-30 h-30 rounded-full' src={`${mockData[0].profilePic}`} alt="Profile" />
                                        <button id="edit-pic" className='absolute right-4 bottom-4 md:absolute md:bottom-2 md:right-6'><img className='w-5 h-5 bg-slate-300 rounded-full' src="/src/assets/camera-edit.svg" alt="" /></button>
                                    </div>
                    <div className='flex flex-col items-start p-30'>
                        {mockData.map((detail) => {
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
                    <div>
                        <Button>Edit Profile</Button>
                    </div>

                    
                    
            </div>
        </div>
        {/* <div className='form-container'>
            <form action="">
                <div>
                    <label htmlFor="">FirstName : </label>
                    <input id="firstName" type="text" value={firstname} />
                    <label>Last Name: </label>
                    <input type="text" value={lastName}/>
                    <label>Gender</label>
                    <input type='select'/>
                           
                </div>
                
                </form>
                </div> */}
    </div>
  )
}

export default ProfilePage