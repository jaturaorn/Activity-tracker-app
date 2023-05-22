import { useState } from "react";
import { useGoalDispatch } from "../shared/goalContext";
import moment from "moment";

/*
    How to use
    setCloseModal: boolean default false, use to close this modal after hit close or cancel or create success by parent.

    GoalForm have one duty is store new goal in database. that it.
*/

function GoalForm({ setCloseModal }) {
    const [goal, setGoal] = useState({
        activityType: "",
        deadline: "",
        duration: 0,
        energyBurn: 0,
    });

    const { createGoal } = useGoalDispatch();

    function handleTypeChange(activityType) {
        setGoal(prev => { return { ...prev, activityType } })
    }

    function handleDeadlineDate(deadline) {
        setGoal(prev => { return { ...prev, deadline } })
    }

    function handleDurationChange(duration) {
        let calories = Math.floor(Math.random() * duration + 1); // calculate by each type
        setGoal(prev => { return { ...prev, duration: parseInt(duration), energyBurn: calories } })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const newGoal = { ...goal }; // dateAdd with Date not quite good. we will replace them in future
        createGoal(newGoal);
        console.log("Send new goal to database.");
        
        // after added to database then close the modal.
        setCloseModal(true);
    }

    // console.log(goal);

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-20">
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80" onClick={() => setCloseModal(true)}></div>
            <div className="z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-xl w-550 rounded-t-md rounded-b-md">
                {/* top */}
                <div className="flex justify-between items-center bg-main-purple text-white px-4 py-2 rounded-t-md">
                    <span className="font-bold">Create Goal</span>
                    <span className="cursor-pointer font-bold" onClick={() => setCloseModal(true)}>&#x2715;</span>
                </div>

                {/* modal content */}
                <form onSubmit={handleSubmit}>
                    <div className="px-4 py-2">
                        <div>
                            <span className="font-semibold">Choose Activity</span>
                        </div>
                        <div>
                            <select className="border px-2 py-1 rounded-md" name="type" defaultValue={""} onChange={(e) => handleTypeChange(e.target.value)} required >
                                <option value="" disabled>Select activity</option>
                                <option value="Jogging">Jogging</option>
                                <option value="Abs">Abs</option>
                                <option value="Yoga">Yoga</option>
                                <option value="Pilates">Pilates</option>
                                <option value="Zumba">Zumba</option>
                            </select>
                        </div>
                    </div>
                    {/* mid */}
                    <div className="px-4 py-2">
                        <div>
                            <span className="font-semibold">Your challenge</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            {/* deadline */}
                            <div className="w-1/3">
                                <div>
                                    <span className="font-semibold text-sm">Deadline</span>
                                </div>
                                <div>
                                    <input className="px-2 py-1 border rounded-md w-full" type="date" min={moment(Date.now()).format("YYYY-MM-DD")} onChange={(e) => handleDeadlineDate(e.target.value)} required />
                                </div>
                            </div>

                            {/* duration */}
                            <div className="w-1/3">
                                <div>
                                    <span className="font-semibold text-sm">Duration (Minutes)</span>
                                </div>
                                <div>
                                    <input className="px-2 py-1 border rounded-md w-full" type="number" placeholder="Enter duration" min="0" onChange={(e) => handleDurationChange(e.target.value)} required />
                                </div>
                            </div>

                            {/* energy burn */}
                            <div className="w-1/3">
                                <div>
                                    <span className="font-semibold text-sm">Energy burn (Calories)</span>
                                </div>
                                <div>
                                    <input className="px-2 py-1 border rounded-md w-full" type="number" value={goal.energyBurn} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="px-4 py-4 flex justify-end items-center gap-x-2 text-white">
                        <button className="bg-main-purple px-4 py-1 rounded-md cursor-pointer" >Create</button>
                        <button className="bg-main-pink px-4 py-1 rounded-md cursor-pointer" onClick={() => setCloseModal(true)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GoalForm;
