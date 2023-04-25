import {useState} from "react";
import Imagedata from './imagedata';
import '../imgescss.css'

const Imageslider = () => {
    const [Current, setCurrent] = useState(0);
    const length = Imagedata.length;

    const prevSlide = () => {
        if (Current === 0) {
            setCurrent(length - 1)
        } else {
            setCurrent(Current - 1)
        }
    }

    const nextSlide = () => {
        if (Current === length - 1) {
            setCurrent(0)
        } else {
            setCurrent(Current + 1)
        }
    }

    return (
        <section className="slider">
            <h1 className="text-white">left</h1>
            {/* <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide} />
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide} /> */}
            {Imagedata.map((data, index) => {
                return (
                    <div className={index === Current ? "slide active" : "slide"} key={index}>
                        {index === Current &&
                            (
                                <div>
                                    <img src={data.image} alt={data.title} className="image" />
                                </div>
                            )}
                    </div>
                )
            })}
        </section>
    )
}

export default Imageslider