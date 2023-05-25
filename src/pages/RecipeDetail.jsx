import React, { useEffect, useState } from "react";
import Axios  from "axios";
import { useLocation, useParams, } from "react-router-dom";
import Footer from "../components/Footer";
import {v4 as uuidv4} from "uuid";


function RecipeDetail() {
    const [data, setData] = useState();
    const [loading, setIsLoading] = useState(true);
    let { name } = useParams();
    console.log(name)
    function getData() {
        console.log("Name from URL:", name); 
        Axios.get(`https://lick-me-food.onrender.com/api/foods/get/${name}`)
        .then((res) => {
            console.log("Hi data ", res)
            setData(res.data);
            setIsLoading(false);
        })
        .catch(err => console.log(err));
        setIsLoading(false)
    }

    useEffect(() => {
        getData();
    }, [name])

    if(loading) {
        return "Is loading..."
    }

    // Return null or a loading spinner if data is not available
    if (!data) {
        return 'Loading'; // or return <Spinner /> if you have a loading spinner component
    }
    return (
        <>
            <div>
                {/* Header */}
                <section className="flex flex-col h-screen items-center justify-between bg-cover" 
                style={{ backgroundImage: `url(${data.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                    <div className="container mt-8">
                        <h3 className="text-left text-3xl bg-red-100 inline-block px-8 py-2 rounded-full bg-opacity-80">{data.meal}</h3>
                    </div>
                    <div className="w-full bg-gray-100 bg-opacity-50 h-60 flex flex-col items-center justify-center">
                        <h1 className="text-center text-9xl text-black bg-100 font-semibold tracking-widest">{data.name}</h1>
                    </div>
                    <div className="container flex justify-end">
                        <h2 className="text-right text-5xl text-black mb-8 bg-red-100 inline-block px-8 py-2 rounded-full">{data.kcal}kcal</h2>
                    </div>
                </section>

                {/* Ingredients */}
                 <section>
                    <article className="container mx-auto py-12 break-words">
                        <h1 className="text-6xl text-center">Ingredients</h1>
                        <ul className="list-disc list-outside ml-20 mt-8 text-3xl">
                            {data.ingredients.map((ingredientItem) => 
                            <li key={uuidv4()}
                            className="flex justify-between"
                            >
                                <span>{ingredientItem.name}</span>
                                <span>{ingredientItem.quantity}</span>
                            </li>)}
                        </ul>
                    </article>
                </section> 

                {/* How to make ... */}
                <section className="bg-main-purple text-white py-12 break-words">
                    <article className="container mx-auto">
                        <h1 className="text-center text-6xl mt-8 mb-20">How To Make {data.name}</h1>
                        <ul className="list-disc list-outside ml-20 mt-8 text-3xl ">
                            {data.howto.map((stepItem) => 
                            <li key={uuidv4()}
                            className="m-6"
                            >
                                {stepItem.step}
                            </li>)}
                        </ul>
                    </article>
                </section>
            </div>
            
        </>
    );
}

export default RecipeDetail;