import cat from '../image/Cat.jpg';

const DashBoxProfile = () => {
  return (
    <div className="basis-[40%] border bg-white shadow-md cursor-pointer rounded-[4px]">
      <img src={cat} class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
      width="380px" height="500px" alt='' />
      <h3 className='text-lg font-medium text-center'>Karina Aespa</h3>
      <div className='grid grid-cols-3 gap-4 border shadow-md'>
        <div><h4 className='text-semiblod text-center'>Height</h4></div>
        <div><h4 className='text-semiblod text-center'>Weight</h4></div>
        <div><h4 className='text-semiblod text-center'>Age</h4></div>
      </div>
      <div className='grid grid-cols-3 gap-4 border shadow-md'>
        <div><h5 className='text-semiblod text-center text-white bg-main-purple'>163 CM</h5></div>
        <div><h5 className='text-semiblod text-center text-white bg-main-purple'>45 KG</h5></div>
        <div><h5 className='text-semiblod text-center text-white bg-main-purple'>23</h5></div>
      </div>
    </div>
  )
}

export default DashBoxProfile