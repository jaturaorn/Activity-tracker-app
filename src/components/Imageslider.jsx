import '../imgescss.css'
import { useState } from 'react';

const Imageslider = ( {Imagedata} ) => {
    const [Current,setCurrent] = useState(0);
    const lengths = Imagedata.length;

    const prevSlide =()=>{
        if(Current === 0){
            setCurrent(lengths-1)
        }else{
            setCurrent(Current-1)
        }
    }
    const nextSlide =()=>{
        if(Current === lengths-1){
            setCurrent(0)
        }else{
            setCurrent(Current+1)
        }
    }

    return (
    <section className="slider">
        <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
        <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
        {Imagedata.map((data, index) =>{
            return (
                <div className={index === Current ? "slide active" : "slide"} key={index}>
                    {index === Current &&
                    (
                        <div>
                        <img src={data.image} alt={data.title} className="image"/>
                        </div>
                    )}
                </div>
            )
        })}
    </section>
  )
}

export default Imageslider