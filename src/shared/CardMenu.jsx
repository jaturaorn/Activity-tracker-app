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
  return (
    <>
        <div className='flex flex-col'>

            {food.map((item,index) => {
                <div key={index}>
                     <div>
                        <img src={`${item.imgs}`}/>
                    </div>
                    <div>
                        <span>{item.name}</span>
                    </div>
                </div>
               
            })}
           
        </div>
    </>
  )
}

export default CardMenu