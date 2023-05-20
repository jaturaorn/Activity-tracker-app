import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import GoalList from "./GoalList";

function GoalTracker({ setCloseModal }) {
    return (
        <div className="col-span-5 border-main-purple border-2 rounded-t-xl shadow-lg max-md:rounded-t-none">
            <div className="bg-main-purple px-8 py-4 rounded-t-lg max-md:rounded-t-none">
                <h1 className="text-white text-2xl font-bold ">Goals</h1>
            </div>
            <div className="w-full">
                <div className="pt-8 py-8 shadow-sm">
                    <button className="bg-main-pink text-white px-8 py-2 text-2xl block mx-auto rounded-lg shadow-lg" onClick={() => setCloseModal(false)}>New Goal</button>
                </div>
                <div className="flex flex-col gap-y-4 px-12 py-8 overflow-auto w-full h-900 max-md:px-2 max-xl:px-8">
                    <GoalList />
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