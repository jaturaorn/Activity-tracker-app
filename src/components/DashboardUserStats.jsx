import { FaClock, FaFireAlt, FaFontAwesomeFlag } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi"

const DashboardUserStats = () => {
  return (
    <div className="w-full">

      <header className="flex items-end gap-x-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold border-l-4 border-black pl-3">Hello, Karina</h1>
        <span className="text-lg">Keep Moving & Stay Healty</span>
      </header>

      <main className="text-white grid grid-cols-4 gap-x-16 max-lg:grid-cols-2 max-lg:gap-y-4 max-md:grid-cols-1 px-4">
        <div className="bg-main-purple py-4 w-full h-full flex flex-col items-center justify-center rounded-xl shadow-lg">
          <div> <FaClock className="w-16 h-16" /> </div>
          <div className="pt-8"> <h1 className="text-2xl font-semibold">Duration</h1> </div>
          <div><p className="text-4xl font-bold"> 1.30 Hours</p> </div>
        </div>
        <div className="bg-main-purple py-4 w-full h-full flex flex-col items-center justify-center rounded-xl shadow-lg">
          <div> <FaFontAwesomeFlag className="w-16 h-16" /> </div>
          <div className="pt-8"> <h1 className="text-2xl font-semibold">Distance</h1> </div>
          <div><p className="text-4xl font-bold"> 1.30 Hours</p> </div>
        </div>
        <div className="bg-main-purple py-4 w-full h-full flex flex-col items-center justify-center rounded-xl shadow-lg">
          <div> <FaFireAlt className="w-16 h-16" /> </div>
          <div className="pt-8"> <h1 className="text-2xl font-semibold">Energy burn</h1> </div>
          <div><p className="text-4xl font-bold"> 1.30 Hours</p> </div>
        </div>
        <div className="bg-main-purple py-4 w-full h-full flex flex-col items-center justify-center rounded-xl shadow-lg">
          <div> <GiStairsGoal className="w-16 h-16" /> </div>
          <div className="pt-8"> <h1 className="text-2xl font-semibold">Goals</h1> </div>
          <div><p className="text-4xl font-bold"> 1.30 Hours</p> </div>
        </div>
      </main>

    </div>
  )
}

export default DashboardUserStats