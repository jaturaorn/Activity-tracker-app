import { Menu, Transition } from '@headlessui/react'
import yoga from "../assets/yoga64.png"
import edit from "../assets/edit.png"

function ActivityTracker() {
    return (
        <div className="col-span-7 border-main-purple border-2 rounded-t-xl shadow-lg max-md:rounded-t-none">
            <div className="bg-main-purple px-8 py-4 rounded-t-lg max-md:rounded-t-none">
                <h1 className="text-white text-2xl font-bold ">Activities Tracking</h1>
            </div>
            <div className="w-full">
                <div className="pt-8 py-8 shadow-sm">
                    <button className="bg-main-pink text-white px-8 py-2 text-2xl block mx-auto rounded-lg shadow-lg">Create Activity</button>
                </div>
                <div className="flex flex-col gap-y-4 px-24 py-8 overflow-auto w-full h-900 max-md:px-2 max-xl:px-8">
                    <ActivityList />
                </div>
            </div>
        </div>
    )
}

function ActivityList() {
    return (
        <>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
        </>
    )
}

function ActivityCard() {
    return (
        <div className="bg-main-purple text-white shadow-lg rounded-3xl py-4 px-8 max-md:px-4">
            {/* excersise type */}
            <div className="flex justify-between max-md:text-sm max-md:tracking-wide">
                <div className="w-1/6 flex justify-center items-center ">
                    <img className="block" src={yoga} />
                </div>

                {/* content */}
                <div className="w-5/6 px-4 max-md:px-0 max-md:pl-4">
                    {/* title */}
                    <div>
                        <span className="font-semibold text-2xl">วิ่งกับเพื่อนหว้าาาาาา</span>
                    </div>

                    {/* Date */}
                    <div className="">
                        <span><span className="font-semibold">Date:</span> 14 May 2023</span>
                    </div>

                    {/* duration */}
                    <div className="">
                        <span><span className="font-semibold">Duration:</span> 01:00 Hrs</span>
                    </div>

                    {/* distance */}
                    <div className="">
                        <span><span className="font-semibold">Distance:</span></span> <span>10.00 Km</span>
                    </div>

                    {/* energy burn */}
                    <div>
                        <span><span className="font-semibold">Energy burn:</span> 3000 Cal</span>
                    </div>
                </div>

                {/* dropdown menu */}
                <div className="w-1/6 flex justify-end items-start">
                    <Menu as="div" className="inline-block text-left">
                        <Menu.Button className="text-2xl font-bold text-white "><img className="block w-6" src={edit} /></Menu.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items className="absolute text-gray-800 whitespace-nowrap py-1 w-32 right-0 z-10 rounded-md bg-white shadow-lg  focus:outline-none">
                                <Menu.Item className="block w-full text-left px-2 py-1 font-medium">
                                    {({ active }) => (<button className={`${active && 'bg-gray-200'}`}  > Edit</button>)}
                                </Menu.Item>
                                <Menu.Item className="block w-full text-left px-2 py-1 text-red-500 font-medium">
                                    {({ active }) => (<button className={`${active && 'bg-gray-200'}`}  > Delete </button>)}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>


            {/* description */}
            <div>
                {/* <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p> */}
                <p className="break-words pt-3 text-base max-md:text-sm">ฟหกสาด่วฟสหาก่ดสฟาห่กด่ไรำดนไำ่ดยนรฟ่หกด่ฟหาก่ฟวาสหกวด่</p>
            </div>

        </div>
    )
}

export default ActivityTracker;