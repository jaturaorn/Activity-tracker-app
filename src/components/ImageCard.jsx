import pic1 from '../image/hiit1.jpg'
import pic2 from '../image/hiit2.jpg'
import pic3 from '../image/hiit3.jpg'
import pic4 from '../image/hiit4.jpg'
import { motion } from 'framer-motion';

const ImageCard = () => {
  const mockdata = [
    {
      img: pic1,
      title: '30 MIN FULL BODY CARDIO HIIT',
      calories: '3000',
      url: "https://www.youtube.com/watch?v=Urx4gMA2-Kw"
    },
    {
      img: pic2,
      title: '30 MIN CALORIE KILLER HIIT ',
      calories: '100',
      url: "https://www.youtube.com/watch?v=jpizoUy4K9s"
    },
    {
      img: pic3,
      title: '30 MIN CARDIO HIIT ',
      calories: '125',
      url: "https://www.youtube.com/watch?v=nbP7m0S0Ato"
    },
    {
      img: pic4,
      title: '55 MIN HIIT (no equipment)',
      calories: '134',
      url: "https://www.youtube.com/watch?v=IMuYJAQ5GMk"
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
            <a href={card.url} target='_blank'>
              <img className="rounded-t-lg" src={card.img} alt="" />
              <h3 className="text-lg font-light text-black mt-2 mb-2 text-left ml-4">{card.title}</h3>
              <h2 className="text-xs font-light text-gray mt-2 mb-2 text-left ml-4">Calories burnt : {card.calories}</h2>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImageCard;
