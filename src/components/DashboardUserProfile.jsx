const DashboardUserProfile = () => {
  return (
    <div className="col-span-5 border-main-purple border-2 rounded-t-xl shadow-lg max-md:rounded-t-none rounded-lg px-8">
      <div className="flex flex-col justify-center h-full w-full ">
        <div className="flex justify-center items-center pb-10 pt-8">
          <img src={"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"} className="block h-64 w-64 rounded-full shadow-lg border-2 border-main-dark-purple object-cover" />
        </div>
        <div>
          <h1 className='text-center text-4xl font-bold tracking-wider'>Karina Aespa</h1>
        </div>

        <div className="flex justify-center items-center text-center text-xl gap-x-8 pt-6 pb-8 max-xl:grid max-xl:justify-normal">
          <div>
            <h2 className="px-4 py-2 font-semibold">BMI</h2>
            <p className="bg-main-purple text-white px-6 py-2 rounded-xl font-semibold">23.21</p>
          </div>
          <div>
            <h2 className="px-4 py-2 font-semibold">Height</h2>
            <p className="bg-main-purple text-white px-6 py-2 rounded-xl font-semibold">168 cm</p>
          </div>
          <div>
            <h2 className="px-4 py-2 font-semibold">Weight</h2>
            <p className="bg-main-purple text-white px-6 py-2 rounded-xl font-semibold">45 kg</p>
          </div>
          <div>
            <h2 className="px-4 py-2 font-semibold">Age</h2>
            <p className="bg-main-purple text-white px-6 py-2 rounded-xl font-semibold">23</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardUserProfile