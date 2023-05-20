import { Menu, Transition } from '@headlessui/react'
import edit from "../assets/edit.png"
import { useActivityDispatch } from '../shared/activityContext';
import { ActivityIcon } from './ActivityIcon';

function ActivityCard({ activity, setSelectedActivity, setCloseModal }) {
    const { deleteActivity } = useActivityDispatch();

    function handleEdit(userId) {
        console.log("Edit", userId);
        setSelectedActivity(activity);
        setCloseModal(false);
    }

    async function handleDelete() {
        deleteActivity(activity._id);
    }

    return (
        <div className="bg-main-purple text-white shadow-lg rounded-3xl py-4 px-8 max-md:px-4 hover:shadow-lg transition-all hover:shadow-main-purple hover:transition-all">
            {/* excersise type */}
            <div className="flex justify-between max-md:text-sm max-md:tracking-wide">
                <div className="w-1/6 flex justify-center items-center ">
                    <img className="block" src={ActivityIcon.getIcon(activity.activityType.toLowerCase())} />
                </div>

                {/* content */}
                <div className="w-5/6 px-4 max-md:px-0 max-md:pl-4">
                    {/* title */}
                    <div>
                        <span className="font-semibold text-2xl break-words"> {activity.title}</span>
                    </div>

                    {/* Date */}
                    <div className="">
                        <span><span className="font-semibold">Date:</span> {activity.dateTime}</span>
                    </div>

                    {/* duration */}
                    <div className="">
                        <span><span className="font-semibold">Duration:</span> {activity.duration}</span>
                    </div>

                    {/* distance */}
                    <div className="">
                        <span><span className="font-semibold">Distance:</span></span> <span> {activity.distance}</span>
                    </div>

                    {/* energy burn */}
                    <div>
                        <span><span className="font-semibold">Energy burn:</span> {activity.energyBurn}</span>
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
                                    {({ active }) => (<button className={`${active && 'bg-gray-200'}`} onClick={() => handleEdit()} > Edit</button>)}
                                </Menu.Item>
                                <Menu.Item className="block w-full text-left px-2 py-1 text-red-500 font-medium">
                                    {({ active }) => (<button className={`${active && 'bg-gray-200'}`} onClick={() => handleDelete()}  > Delete </button>)}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>


            {/* description */}
            <div>
                {/* <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p> */}
                <p className="break-words pt-3 text-base max-md:text-sm">{activity.description}</p>
            </div>

        </div>
    )
}

export default ActivityCard;