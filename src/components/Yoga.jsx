import Yoga1 from '../image/cardworkout1.jpg';
import Yoga2 from '../image/cardworkout5.jpg';
import Yoga3 from '../image/cardworkout6.jpg';
import Yoga4 from '../image/cardworkout7.jpg';
import { motion } from 'framer-motion';

const Yoga = () => {
  const mockdata = [
    {
      img: Yoga1,
      title: 'Yoga 10 Min',
      calories: '100',
    },
    {
      img: Yoga2,
      title: 'Yoga 15 Min',
      calories: '150',
    },
    {
      img: Yoga3,
      title: 'Yoga for Mid-day 20 Min',
      calories: '200',
    },
    {
      img: Yoga4,
      title: 'Yoga for Evening 30 Min',
      calories: '250',
    },
  ];

  const titleText = 'Discover inner peace and strength through Yoga with us';

  return (
    <section className="container mx-auto py-20 px-8">
      <h2 className="text-3xl font-light">HIIT</h2>
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
            <img className="rounded-t-lg" src={card.img} alt="" />
            <h3 className="text-lg font-light text-black mt-2 mb-2 text-left ml-4">{card.title}</h3>
            <h2 className="text-xs font-light text-gray mt-2 mb-2 text-left ml-4">Calories burnt : {card.calories}</h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Yoga;
