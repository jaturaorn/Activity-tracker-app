import { FaClock,FaFireAlt,FaFontAwesomeFlag } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md"

const DashHeroTop = () => {
  return (
    <div>
        <h1 className="text-bold text-[35px] leading-[40px] cursor-pointer ml-9 mb-2 mt-3">Hello, Karina</h1>
        <p className="ml-9 mb-4">Keep moving & Stay Healthy</p>
        <div className="grid grid-cols-4 gap-[15px] mt-[15px] pb-[15px] ml-2">
            <div className="h-[100px] rouned-[10px] bg-main-purple  flex 
                items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]">
                <FaClock fontSize={28} color="" className="mb-3"/>
                <div>
                    <h2 className="text-[#fff] text-[25px] leading-[20px] font-semibold">Duration</h2>
                    <h3 className="text-[20px] leading-[22px] font-bold text-[#fff] mt-[5px]">1.30 Hours</h3>
                </div>
            </div>
            <div className="h-[100px] rouned-[10px] bg-main-purple flex 
                items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]">
                <FaFireAlt fontSize={28} color="" className="mb-3"/>
                <div>
                    <h2 className="text-[#fff] text-[25px] leading-[20px] font-semibold">Duration</h2>
                    <h3 className="text-[20px] leading-[22px] font-bold text-[#fff] mt-[5px]">1.30 Hours</h3>
                </div>
            </div>
            <div className="h-[100px] rouned-[10px] bg-main-purple flex 
                items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]">
                <FaFontAwesomeFlag fontSize={28} color="" className="mb-3"/>
                <div>
                    <h2 className="text-[#fff] text-[25px] leading-[20px] font-semibold">Duration</h2>
                    <h3 className="text-[20px] leading-[22px] font-bold text-[#fff] mt-[5px]">1.30 Hours</h3>
                </div>
            </div>
            <div className="h-[100px] rouned-[10px] bg-main-purple flex 
                items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]">
                <MdOutlineWaterDrop fontSize={28} color="" className="mb-3"/>
                <div>
                    <h2 className="text-[#fff] text-[25px] leading-[20px] font-semibold">Duration</h2>
                    <h3 className="text-[20px] leading-[22px] font-bold text-[#fff] mt-[5px]">1.30 Hours</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashHeroTop