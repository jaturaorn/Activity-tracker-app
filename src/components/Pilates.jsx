import pic1 from '../image/Pilates1.jpg';
import pic2 from '../image/Pilates2.jpg';
import pic3 from '../image/Pilates3.jpg';
import pic4 from '../image/Pilates4.jpg';

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

  return (
    <div>
        <section className="container mx-auto py-10 px-8">
            <h2 className='text-3xl font-bold my-5'>Pilates</h2>
            <div className="grid lg:grid-cols-4 gap-6">
            {mockdata.map(card =>(
            <div className='shadow-lg rounded-lg bg-main-purple'>
            <img className='rounded-t-lg' src={card.img} alt=''/>
            <h3 className='text-xl text-white mt-2 mb-3 text-center'>{card.title}</h3>
            </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Pilates