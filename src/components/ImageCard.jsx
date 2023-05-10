import pic1 from '../image/cardworkout1.jpg';
import pic2 from '../image/cardworkout2.jpg';
import pic3 from '../image/cardworkout3.jpg';
import pic4 from '../image/cardworkout4.jpg';


const ImageCard = () => {
  const mockdata = [
    {
      img: pic1,
      title: 'Card Workout',
    },
    {
      img: pic2,
      title: 'Card Workout',
    },
    {
      img: pic3,
      title: 'Card Workout',
    },
    {
      img: pic4,
      title: 'Card Workout',
    }
  ]
  return (
    <main className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-4 gap-6">
        {mockdata.map(card =>(
          <div className='shadow-lg rounded-lg'>
            <img className='rounded-t-lg' src={card.img} alt=''/>
            <h3 className='text-3xl font-bold text-slate-700 mb-3 text-center'>{card.title}</h3>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ImageCard