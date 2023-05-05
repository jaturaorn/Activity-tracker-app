import React, { useState } from 'react'
import Button from '../shared/Button';
// import CardMenu from '../shared/CardMenu-legacy';
import CardMenu from '../shared/CardMenu';


function RecipesPage() {

    const mockData = [
        {
            id: 1,
            name: 'Vegetarian Sushi',
            imgs: 'https://images.unsplash.com/photo-1676037150304-e4c4a1d585f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            rating: 3,
            kcal: 250,
            meal: 'breakfast',
            ingredients: [],
            howto: [],

        
        },
        {
            id: 2,
            name: 'Vegan Lasagne',
            imgs: 'https://images.unsplash.com/photo-1647353337660-8b27b53b07f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
            rating: 3,
            kcal: 120,
            meal: 'breakfast',
            ingredients: [],
            howto: [],

        
        },
        {
            id: 3,
            name: 'Springroll',
            imgs: 'https://images.unsplash.com/photo-1618406854423-ef169758d6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3125&q=80',
            rating: 3,
            kcal: 220,
            meal: 'breakfast',
            ingredients: [],
            howto: [],

        
        },

    ]

    const categeries = [
        {title: "Vegetarian"}
    ]

    const [data, setdata] = useState(mockData);

  return (

    <>

            
            <div className="container mx-auto my-auto p-8 py-10">
                <div className=' hidden md:flex justify-around '>
                    <h2 className='md:font-extrabold text-3xl my-3'>Dish of the Day</h2>
                    <h2 className='md:font-extrabold text-3xl my-3 ml-10'>Best of Its Kind</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-8 mt-3">
                    <div className="border-2 border-solid border-main-purple rounded-lg md:col-span-4 md:row-span-2 p-4">
                        <div className='flex gap-8 justify-around m-5 '>
                            <div className='w-80'>
                                <img className='w-full m-0 md:w-full h-80 rounded-xl'  src='https://images.unsplash.com/photo-1623428187425-873f16e10554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'/>
                            </div>
                            <div className='hidden md:flex flex-col gap-3 justify-between'>
                                <h2 className='text-2xl text-center font-extrabold'>Quinoa Salad</h2>
                                <p>"The Best salad for your daily delight"</p>
                                <Button>View Recipe</Button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="border-2 border-solid border-transparent rounded-lg md:col-span-2">
                        <div className="flex bg-main-purple justify-between items-center align-middle rounded-3xl best-of-salad-container ml-4">
                                <img
                                className="hidden md:block w-48 h-48 rounded-lg"
                                src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                                />
                                <span className="mr-6 text-white">Best of Salad</span>
                        </div>
                    </div>

                    <div className="border-10 border-solid border-transparent rounded-lg md:col-span-2">
                        <div className="flex bg-main-purple justify-between items-center align-middle rounded-3xl best-of-salad-container ml-4">
                                <img
                                className="hidden md:block w-48 h-48 rounded-lg"
                                src="https://images.unsplash.com/photo-1551529674-48920e9b835b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80"
                                />
                                <span className="mr-6 text-white">Best of Keto</span>
                        </div>
                    </div>
                    
                 </div>

                 {/* This section need to be refracted */}
                {/* Vegetarian */}
                 <div className='flex m-5'>
                     <div className='flex align-bottom items-end gap-3'>
                        <h2 className='font-bold text-3xl'>Vegetarian</h2>
                        <div>
                            <button className='hover:bg-zinc-700 decoration-dashed'>view all</button>
                        </div>
                       
                     </div>
                    
                 </div>
                 {/* food-card */}
                 <div className='md:flex justify-around'>

                    {data.map((food, index) => {
                        return (
                            <CardMenu data={food} index={index} />
                        );
                        
                    })}
                </div>
                    {/* food-card */}
                <div className='flex m-5'>
                     <div className='flex align-bottom items-end gap-3'>
                        <h2 className='font-bold text-3xl'>High Protein</h2>
                        <div>
                            <button className='hover:bg-zinc-700 decoration-dashed'>view all</button>
                        </div>
                       
                     </div>
                    
                </div>
                <div className='md:flex justify-around'>

                    {data.map((food, index) => {
                        return (
                        <CardMenu data={food} index={index} />
                        );
                        
                    })}
                </div>
            </div>
    </>
  );
}

export default RecipesPage