import pic1 from '../image/cardworkout1.jpg';
import pic2 from '../image/cardworkout2.jpg';
import pic3 from '../image/cardworkout3.jpg';
import pic4 from '../image/cardworkout4.jpg';


const ImageCard = () => {
  const mockdata = [
    {
      img: pic1,
      title: 'Yoga 15 Min',
    },
    {
      img: pic2,
      title: 'Weight Training',
    },
    {
      img: pic3,
      title: 'Abs workout',
    },
    {
      img: pic4,
      title: 'Aerobics Workout',
    }
  ]
  return (
    <main className="container mx-auto py-20 px-8">
      <h2 className='text-3xl font-light'>HIIT</h2>
      <p className='text-large font-extralight my-3'>Ready to get heart pumping with HIIT workout? Push your limit with this high intensity exercise</p>
      <div className="grid lg:grid-cols-4 gap-6">
        {mockdata.map(card =>(
          <div className='shadow-lg rounded-lg bg-main-purple'>
            <img className='rounded-t-lg' src={card.img} alt=''/>
            <h3 className='text-xl text-white mt-2 mb-2 text-center'>{card.title}</h3>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ImageCard