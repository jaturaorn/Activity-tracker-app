import ImageCard from '../components/ImageCard';
import Yoga from '../components/Yoga';
import Pilates from '../components/Pilates';

function WorkoutVideos() {
  return (
    <div className='bg-gray-100'>
      <ImageCard />
      <Yoga />
      <Pilates />
    </div>
  )
}

export default WorkoutVideos