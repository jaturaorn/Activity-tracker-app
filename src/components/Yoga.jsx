import Yoga1 from '../image/yoga1.jpg'
import Yoga2 from '../image/yoga2.jpg'
import Yoga3 from '../image/yoga3.jpg'
import Yoga4 from '../image/yoga4.jpg'
import { motion } from 'framer-motion';

const Yoga = () => {
  const mockdata = [
    {
      img: Yoga1,
      title: 'Yoga 15 Min',
      calories: '500',
      url: "https://www.youtube.com/watch?v=J94Z4ePPuXQ"
    },
    {
      img: Yoga2,
      title: 'Yoga Flow 40 Min',
      calories: '1500',
      url: "https://www.youtube.com/watch?v=J94Z4ePPuXQ"
    },
    {
      img: Yoga3,
      title: 'Morning Yoga 15 Min',
      calories: '450',
      url: "https://www.youtube.com/watch?v=J94Z4ePPuXQ"
    },
    {
      img: Yoga4,
      title: 'Full Body Yoga for Strength & Flexibility',
      calories: '250',
      url: "https://www.youtube.com/watch?v=Eml2xnoLpYE"
    },
  ];

  const titleText = 'Discover inner peace and strength through Yoga with us';

  return (
    <section className="container mx-auto py-20 px-8">
      <h2 className="text-3xl font-light">Yoga</h2>
      <p className="text-large font-extralight my-3">
        {titleText}
      </p>
      <div className="grid lg:grid-cols-4 gap-6">
        {mockdata.map((card) => (
          <motion.div
            className="shadow-lg rounded-lg bg-white shadow-dark-main-purple"
            whileHover={{ scale: 1.1, cursor: "pointer" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <a href={card.url} target='_blank'>
              <img className="rounded-t-lg w-full h-52 object-cover" src={card.img} alt="yoga-img"
              //style={{width: '100%', height: '200px', objectFit: 'cover'}} 
              />
              <h3 className="text-lg font-light text-black mt-2 mb-2 text-left ml-4">{card.title}</h3>
              <h2 className="text-xs font-light text-gray mt-2 mb-2 text-left ml-4">Calories burnt : {card.calories}</h2>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Yoga;
