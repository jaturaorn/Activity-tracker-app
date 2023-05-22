import React, { useState, useEffect } from 'react'
import Button from '../shared/Button';
import Axios from 'axios';
// import CardMenu from '../shared/CardMenu-legacy';
import CardMenu from '../shared/CardMenu';


function RecipesPage() {
    const [datas, setdatas] = useState("");
    // function fetchData() {
    //     Axios.get("https://lick-me-food.onrender.com/api/foods/get")
    //     .then((res) => {
    //         console.log(res[0])
    //         setdatas(res);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    // console.log(datas);

    // useEffect (() => {
    //     fetchData();
    // }, []);


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
         {
             id: 4,
             name: 'Chocoblow',
             imgs: 'https://images.unsplash.com/photo-1618406854423-ef169758d6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3125&q=80',
           rating: 3,
            kcal: 220,
             meal: 'breakfast',
             ingredients: [],
            howto: [],

        
         },
         {
            id: 4,
            name: 'Chocoblow',
            imgs: 'https://images.unsplash.com/photo-1618406854423-ef169758d6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3125&q=80',
          rating: 3,
           kcal: 220,
            meal: 'breakfast',
            ingredients: [],
           howto: [],

       
        },
        {
            id: 4,
            name: 'Chocoblow',
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

    <div className='bg-gray-100'>

            
                <div className="container mx-auto my-auto p-8 py-10 ">
                    <div className=' hidden md:flex justify-around '>
                        <h2 className='md:font-light text-4xl my-3'>Trending Now</h2>
                    </div>

                    <div className='flex justify-center gap-10 mx-auto m-10 w-full bg-white p-10 rounded-lg shadow-md'>
                        <div className='w-full md:w-1/2'>
                            <img className='w-full h-80 rounded-xl object-cover object-center' 
                            src='https://images.unsplash.com/photo-1680991172715-4074203a40d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80'
                            //src='https://images.unsplash.com/photo-1623428187425-873f16e10554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelFfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
                            />
                        </div>
                        <div className='w-full md:w-1/2 md:flex md:flex-col gap-3 justify-between p-4'>
                            <h2 className='text-2xl text-center font-light'>Hot Stir Fried Schezwan With Tofu </h2>
                            <div className='max-w-lg'>
                                <p className='font-extralight'>Who says Chinese cuisine isn't suitable for weight loss? This gorgeous recipe will forever change your mind!. Absolutely wonderful , Hot n Spicy</p>
                            </div>
                            <Button>View Recipe</Button>
                        </div>
                    </div>
                
                
                    
            

                 {/* This section need to be refracted */}
                {/* Vegetarian */}
                 <div className='flex m-5'>
                     <div className='flex align-bottom items-end gap-3'>
                        <h2 className='font-light text-3xl'>Vegetarian</h2>
                        <div>
                            <button className='hover:bg-zinc-700 decoration-dashed'>view all</button>
                        </div>
                       
                     </div>
                    
                 </div>
                 <div className='menu-render flex flex-col gap-2 items-center justify-center md:flex md:flex-row md:justify-center md:flex-wrap'>

                    {data.map((food, index) => {
                        return (
                            <CardMenu data={food} index={index} />
                        );
                        
                    })}
                </div>
                    {/* High Protein */}
                <div className='flex m-5'>
                     <div className='flex align-bottom items-end gap-3'>
                        <h2 className='font-light text-3xl'>High Protein</h2>
                        <div>
                            <button className='hover:bg-zinc-700 decoration-dashed'>view all</button>
                        </div>
                       
                     </div>
                    
                </div>
                <div className='menu-render flex flex-col gap-2 items-center justify-center md:flex md:flex-row md:justify-center md:flex-wrap'>

                    {data.map((food, index) => {
                        return (
                        <CardMenu data={food} index={index} />
                        );
                        
                    })}
                </div>

                {/* Drink */}
                <div className='flex m-5'>
                     <div className='flex align-bottom items-end gap-3'>
                        <h2 className='font-light text-3xl'>Healthy Drink Recipes</h2>
                        <div>
                            <button className='hover:bg-zinc-700 decoration-dashed'>view all</button>
                        </div>
                       
                     </div>
                    
                </div>
                
                <div className='menu-render flex flex-col gap-2 items-center justify-center md:flex md:flex-row md:justify-center md:flex-wrap'>

                    {data.map((food, index) => {
                        return (
                        <CardMenu data={food} index={index} />
                        );
                        
                    })}
                </div>
            </div>
         </div>
  );
}

export default RecipesPage