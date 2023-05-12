import { Menu, Transition } from "@headlessui/react";
import yoga from "../assets/yoga64.png"
import edit from "../assets/edit.png"
import { useState } from "react";

function GoalTracker() {
    return (
        <div className="col-span-5 border-main-purple border-2 rounded-t-xl shadow-lg max-md:rounded-t-none">
            <div className="bg-main-purple px-8 py-4 rounded-t-lg max-md:rounded-t-none">
                <h1 className="text-white text-2xl font-bold ">Goals</h1>
            </div>
            <div className="w-full">
                <div className="pt-8 py-8 shadow-sm">
                    <button className="bg-main-pink text-white px-8 py-2 text-2xl block mx-auto rounded-lg shadow-lg">New Goal</button>
                </div>
                <div className="flex flex-col gap-y-4 px-12 py-8 overflow-auto w-full h-900 max-md:px-2 max-xl:px-8">
                    <GoalList />
                </div>
            </div>
        </div>
    )
}

function GoalList() {
    return (
        <>
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
        </>
    )
}

function GoalCard() {
    const [status, setStatus] = useState("none");

    function handleSubmit(status) {
        setStatus(status)

        console.log("Send to database complete.");
    }

    return (
        <div className="bg-main-purple text-white shadow-lg rounded-3xl px-4 py-4 max-md:px-4">
            {/* excersise type */}
            <div className="flex justify-between max-md:text-sm max-md:tracking-wide max-xl:flex-col max-xl:gap-y-4">

                {/* type icon */}
                <div className="w-1/6 flex flex-col justify-center items-center max-xl:w-full">
                    <img className="block" src={yoga} />
                </div>

                {/* content */}
                <div className="w-4/6 px-4 max-md:px-0 max-md:pl-4 max-xl:w-full">
                    {/* goal type */}
                    <div>
                        <span className="font-semibold text-2xl">Yoga</span>
                    </div>

                    {/* energy burn */}
                    <div>
                        <span><span className="font-semibold">Energy burn: </span> 300 Cal</span>
                    </div>

                    {/* duration */}
                    <div>
                        <span><span className="font-semibold">Duration: </span> 01:00 Hrs</span>
                    </div>

                    {/* end in */}
                    <div>
                        <span className="font-semibold">End in: </span><span>29 day</span>
                    </div>
                </div>

                {/* dropdown menu */}
                <div className="w-2/6 text-center flex justify-center items-center gap-x-3 max-xl:w-full max-xl:px-4">
                    {status === "none" ?
                        <>
                            <div className="block w-full bg-green-500 rounded-full px-2 py-1" onClick={() => handleSubmit("done")}>Done</div>
                            <div className="block w-full bg-red-500 rounded-full px-2 py-1" onClick={() => handleSubmit("fail")}>Cancel</div>
                        </>
                    :null}
                    {status === "done" ? <div className="block w-full bg-green-500 rounded-full px-2 py-1">Done</div> : null}
                    {status === "fail" ? <div className="block w-full bg-red-500 rounded-full px-2 py-1">Fail</div> : null}
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