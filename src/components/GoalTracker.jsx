import { Menu, Tab, Transition } from "@headlessui/react";
import GoalList from "./GoalList";
import { useGoal } from "../shared/goalContext";
import { Fragment } from "react";

function GoalTracker({ setCloseModal }) {
    const { goalsNone, goalsDone, goalsCancel } = useGoal();
    return (
        <div className="col-span-5 border-main-purple border-2 rounded-t-xl shadow-lg max-md:rounded-t-none">
            <div className="bg-main-purple px-8 py-4 rounded-t-lg max-md:rounded-t-none">
                <h1 className="text-white text-2xl font-bold ">Goals</h1>
            </div>
            <div className="w-full">
                <div className="pt-8 py-8 shadow-sm">
                    <button className="bg-main-pink text-white px-8 py-2 text-2xl block mx-auto rounded-lg shadow-lg" onClick={() => setCloseModal(false)}>New Goal</button>
                </div>
                <div className="flex flex-col overflow-auto w-full h-900 max-md:px-2 max-xl:px-8">
                    <Tab.Group>
                        <Tab.List className="flex items-center gap-x-2 border-b-2 font-medium text-gray-500">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <div className={selected ? "flex justify-center items-center border-b-2 border-main-purple outline-none" : "outline-none flex justify-center items-center"}>
                                        <h1 className={selected ? "cursor-pointer p-2 text-main-purple  rounded-t-lg active  outline-none" : "relative cursor-pointer hover:text-gray-800 hover:border-b-2 hover:border-gray-300 p-2 outline-none"}>In Progress </h1>
                                        <span className="text-white text-[10px] font-normal block bg-main-purple  px-1 rounded-full">{!goalsNone ? null : goalsNone.length}</span>
                                    </div>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <div className={selected ? "flex justify-center items-center border-b-2 border-green-600 outline-none" : "flex justify-center items-center outline-none"}>
                                        <h1 className={selected ? "cursor-pointer p-2 text-green-600  rounded-t-lg active  outline-none" : "relative cursor-pointer hover:text-gray-800 hover:border-b-2 hover:border-gray-300 p-2 outline-none"}>Done </h1>
                                        <span className="text-white text-[10px] font-normal block bg-green-600  px-1 rounded-full">{!goalsDone ? null : goalsDone.length}</span>
                                    </div>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <div className={selected ? "flex justify-center items-center border-b-2 border-red-600 outline-none" : "flex justify-center items-center outline-none"}>
                                        <h1 className={selected ? "cursor-pointer p-2 text-red-600  rounded-t-lg active  outline-none" : "relative cursor-pointer hover:text-gray-800 hover:border-b-2 hover:border-gray-300 p-2 outline-none"}>Failed </h1>
                                        <span className="text-white text-[10px] font-normal block bg-red-500  px-1 rounded-full">{!goalsCancel ? null : goalsCancel.length}</span>
                                    </div>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="px-8 py-4">
                                    <GoalList goals={goalsNone} />
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="px-8 py-4">
                                    <GoalList goals={goalsDone} />
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="px-8 py-4">
                                    <GoalList goals={goalsCancel} />
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}


function GoalInProgressTab() {

}

function GoalDoneTab() {

}

function GoalFailTab() {
}

export default GoalTracker;