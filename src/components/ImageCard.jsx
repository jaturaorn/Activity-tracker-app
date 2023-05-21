import pic1 from '../image/cardworkout1.jpg';
import pic2 from '../image/cardworkout2.jpg';
import pic3 from '../image/cardworkout3.jpg';
import pic4 from '../image/cardworkout4.jpg';
import { motion } from 'framer-motion';

const ImageCard = () => {
  const mockdata = [
    {
      img: pic1,
      title: 'Yoga 15 Min',
      calories: '110',
    },
    {
      img: pic2,
      title: 'Weight Training',
      calories: '100',
    },
    {
      img: pic3,
      title: 'Abs workout',
      calories: '125',
    },
    {
      img: pic4,
      title: 'Aerobics Workout',
      calories: '134',
    },
  ];

  return (
    <section className="container mx-auto py-20 px-8">
      <h2 className="text-3xl font-light">HIIT</h2>
      <p className="text-large font-extralight my-3">
        Ready to get your heart pumping with HIIT workout? Push your limits with this high-intensity exercise.
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

export default ImageCard;
