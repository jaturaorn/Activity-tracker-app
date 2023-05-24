import { useUser } from "../shared/userContext"
import defaultProfile from "../assets/defaultprofile2.png"

const DashboardUserProfile = () => {
  const user = useUser();

  const bmi = user.weight / Math.pow((user.height / 100), 2) || 0;

  return (
    <div className="col-span-5 border-main-purple border-2 rounded-t-xl shadow-lg max-md:rounded-t-none rounded-lg px-8">
      <div className="flex flex-col justify-center h-full w-full ">
        <div className="flex justify-center items-center pb-10 pt-8">
          <img src={!user.profileImage ? defaultProfile : user.profileImage} className="block h-64 w-64 rounded-full shadow-lg border-2 border-main-dark-purple object-cover" />
        </div>
        <div>
          <h1 className='text-center text-4xl font-bold tracking-wider'>{`${user.firstName} ${user.lastName}`}</h1>
        </div>

        <div className="flex justify-center items-center text-center text-xl gap-x-8 pt-6 pb-8 max-xl:grid max-xl:justify-normal">
          <div>
            <h2 className="px-4 py-2 font-semibold">BMI</h2>
            <p className="bg-main-purple text-white px-6 py-2 rounded-xl font-semibold">{bmi.toFixed(2)}</p>
          </div>
          <div>
            <h2 className="px-4 py-2 font-semibold">Height</h2>
            <p className="bg-main-purple text-white px-6 py-2 rounded-xl font-semibold">{user.height} cm</p>
          </div>
          <div>
            <h2 className="px-4 py-2 font-semibold">Weight</h2>
            <p className="bg-main-purple text-white px-6 py-2 rounded-xl font-semibold">{user.weight} kg</p>
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