
const urlImage = 'https://unsplash.com/photos/lrQPTQs7nQQ';

const ImageCard = () => {
  
  return (
    <div className="grid grid-cols-1 bg-main-purple rounded-md">
      <h2 className="font-bold my-2">HIIT</h2>
       <img src={urlImage} className="rounded-md rounded-b-none"/>
       <div className="my-2 p-4">
        <h3 className="font-semibold">10 MIN WITH HI-INTENSE</h3>
       </div>
    </div>
  )
}

export default ImageCard