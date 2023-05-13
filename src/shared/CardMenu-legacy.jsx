import React from 'react'
import { useState } from 'react'


function CardMenu() {

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

        
        }
    ]

    const [food, setFood] = useState(mockData);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
      };

    

  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 w-56 rounded-lg border-2 border-white hover:border-main-purple border-solid"
        style={{ backgroundImage: `url(${food[0].imgs})` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
            <div className='absolute flex justify-center items-center align-middle transition-all duration-500 ease-in-out w-full'>

                <div className=" bg-black bg-opacity-75 text-white rounded-lg p-4">
                    <div>
                        <h1>{food[0].name}</h1>
                    </div>
                    

                </div>

            </div>
        )}
    
    </div>
    </>
  );
}

export default CardMenu