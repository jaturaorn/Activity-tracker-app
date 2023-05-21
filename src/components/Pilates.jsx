import pic1 from '../image/Pilates1.jpg';
import pic2 from '../image/Pilates2.jpg';
import pic3 from '../image/Pilates3.jpg';
import pic4 from '../image/Pilates4.jpg';
import {motion } from 'framer-motion';
export const Pilates = () => {

    const mockdata = [
        {
          img: pic1,
          title: 'Pilates 15 Min',
        },
        {
          img: pic2,
          title: 'Pilates 20 Min',
        },
        {
          img: pic3,
          title: 'Pilates for competition',
        },
        {
          img: pic4,
          title: 'Pilates 55 Min',
        }
      ]
    
  const titleText = 'Get ready to sculpt your body and improve core strength with Pilates.';
  return (
    <div>
        <section className="container mx-auto py-20 px-8">
        <h2 className="text-3xl font-light">Pilates</h2>
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
              <img className="rounded-t-lg w-full h-52 object-cover" src={card.img} alt="" />
              <h3 className="text-lg font-light text-black mt-2 mb-2 text-left ml-4">{card.title}</h3>
              <h2 className="text-xs font-light text-gray mt-2 mb-2 text-left ml-4">Calories burnt : {card.calories}</h2>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Pilates