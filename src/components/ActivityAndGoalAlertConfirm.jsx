import { useState } from "react"
import { useActivityDispatch } from "../shared/activityContext";

/*

    How to use

    isActivity: boolean, default true if you need to delete activity, otherwise delete goal.
    setCloseModal: boolean, false is close, true is open, do this on parent.

    // context come to play everywhere.

    // the logic is when user click delete on activity or goal card it will prompt this modal
    // if user confirm delete it will delete in mongoDB
*/

function ActivityAndGoalAlertConfirm({ isActivity, setCloseModal, activity }) {
  const { deleteActivity } = useActivityDispatch();
    
    function handleActivityDelete(activity) {
        // logic here
        // const { id } = activity;
        const { _id } = activity;

        console.log("Activity deleted. ", _id);
        deleteActivity(_id);
    }

    function handleGoalDelete(goal) {
        // logic here
        const { _id } = activity;

        console.log("Goal deleted. ", _id);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Logic here...
        if (isActivity) {
            handleActivityDelete(activity);
        } else {
            handleGoalDelete(goal);
        }

        // then close modal
        setCloseModal(false);
    }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-20">
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-80"> </div>
            <div className="z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-xl w-550 rounded-b-md min-w-300">

                {/* top */}
                <div className="flex justify-between items-center bg-white px-4 py-2 rounded-t-md">
                    <span className="font-bold">Confirm {isActivity ? "Activity" : "Goal"} Deletion</span>
                    <span className="cursor-pointer font-bold" onClick={() => setCloseModal(false)}>&#x2715;</span>
                </div>

                {/* modal content */}
                <form onSubmit={handleSubmit}>

                    {/* alert content */}
                    <div className="px-4 pb-8 pt-2 border-t border-b">
                        <div>
                            <span className="">Are you sure you want to delete this {isActivity ? "activity" : "goal"} card? <span className="text-main-pink">This action cannot be undone.</span></span>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className="px-4 py-4 flex justify-end items-center gap-x-2 text-white">
                        <button className="bg-gray-500 px-4 py-1 rounded-md font-semibold" onClick={(e) => setCloseModal(false)} >Close</button>
                        <button className="bg-red-500 px-4 py-1 rounded-md font-semibold">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ActivityAndGoalAlertConfirm