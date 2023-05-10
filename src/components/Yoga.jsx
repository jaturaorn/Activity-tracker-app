import Yoga1  from '../image/cardworkout1.jpg';
import Yoga2 from '../image/cardworkout5.jpg';
import Yoga3  from '../image/cardworkout6.jpg';
import Yoga4  from '../image/cardworkout7.jpg';

const Yoga = () => {

    const mockdata = [
        {
          img: Yoga1,
          title: 'Yoga 10 Min',
        },
        {
            img: Yoga2,
            title: 'Yoga 15 Min',
        },
        {
          img: Yoga3,
          title: 'Yoga for Mid-day 20 Min',
        },
        {
          img: Yoga4,
          title: 'Yoga for Evening 30 Min',
        }
      ]

  return (
    <section className="container mx-auto py-10 px-8">
      <h2 className='text-3xl font-bold my-5'>Yoga</h2>
      <div className="grid lg:grid-cols-4 gap-6">
        {mockdata.map(card =>(
          <div className='shadow-lg rounded-lg bg-main-purple'>
            <img className='rounded-t-lg' src={card.img} alt=''/>
            <h3 className='text-xl text-white mt-2 mb-3 text-center'>{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Yoga