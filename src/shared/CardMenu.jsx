import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardMenu = ({ data, index }) => {

  const [isHovered, setIsHovered] = useState(false);
  let pathName = data.name.replace(/\s/g, '-').toLowerCase();
  //console.log(data)

  

  return (
    <Link to={{
      pathname: `/recipes/${pathName}`,
      state: { data }
    }}>
    <div className="overlay flex flex-col justify-center items-center gap-4 md:justify-around m-10">
      <div
        key={data.id}
        className="relative w-72 h-96 bg-no-repeat bg-cover cursor-pointer rounded-xl"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`overlay absolute inset-0 grid grid-rows-1fr-2fr-2fr-1fr bg-opacity-20 text-gray-100 transition-all duration-500${
            isHovered ? 'bg-black' : 'bg-transparent'
          }`}
        >
          <div className="items pl-5">
            <div
              className={`head transform transition-all duration-500 ${
                isHovered ? 'translate-y-0' : 'translate-y-10'
              }`}
            >
              <p className="fixed text-2xl flex justify-center leading-10 font-light underline text-white backdrop-blur-0 rounded-xl">
                {data.name}
              </p>
              <hr className="w-0 border-none border-b-2 border-gray-100 absolute bottom-0 left-5 transition-all duration-500" />
            </div>
          </div>
          <div
            className={`items price pl-5 transform transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-xl font-bold">{`${data.kcal} Kcal`}</p>
            <p className="text-xl font-bold">{`${data.genere}`}</p>
            <p className="text-xl font-bold">Healthy Meal</p>
          </div>
          <div
            className={`items more pl-5 transform transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <i className="fa fa-shopping-cart text-sm"></i>
            <span className="ml-2">Click To Learn More</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );

};

export default CardMenu;

