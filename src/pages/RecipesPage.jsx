import React from 'react'
import Button from '../shared/Button';

function RecipesPage() {
  return (
    <>
            <div className="container  mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-2">
                    <div className="border-2 border-solid border-main-purple rounded-lg md:col-span-4 md:row-span-2 p-4">
                        <div className='flex gap-10 justify-around m-5'>
                            <div className='w-80'>
                                <img className='w-full m-0 md:w-full h-80 rounded-xl'  src='https://images.unsplash.com/photo-1623428187425-873f16e10554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'/>
                            </div>
                            <div className='hidden md:flex flex-col gap-3 justify-between'>
                                <h2 className='text-2xl text-center'>Quinoa Salad</h2>
                                <p>"The Best salad for your daily delight"</p>
                                <Button>View Recipe</Button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="border-2 border-solid border-main-purple rounded-lg md:col-span-2 p-4 ">
                        <div className='flex justify-around'>
                            <div>
                                <img className='hidden md:block w-24 h-32'  src='https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80'/>
                            </div>
                            <div className='text-center'>
                                <span>Best of Salad</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="border-2 border-solid border-main-purple  rounded-lg md:col-span-2 p-4 ">
                        <div className='flex justify-around'>
                            <div >
                                <img className='hidden md:block w-full h-32 rounded-xl' src='https://images.unsplash.com/photo-1546554137-f86b9593a222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
                            </div>
                            <div className='text-center'>
                                <span>Best of Keto</span>
                            </div>
                        </div>
                       
                    </div>
                 </div>
            </div>
    </>
  );
}

export default RecipesPage