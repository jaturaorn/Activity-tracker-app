import { useState } from "react";

/*
    How to use
    setCloseModal: boolean default false, use to close this modal after hit close or cancel or create success by parent.

    GoalForm have one duty is store new goal in database. that it.
*/

function GoalForm({ setCloseModal }) {

    const [goalList, setGoalList] = useState([]);

    const [goal, setGoal] = useState({
        // userId: 1,
        type: "",
        dateAdd: "",
        deadlineDate: "",
        dateDone: "",
        calories: 0,
        status: "none", // default status is none
    });

    function handleTypeChange(type) {
        setGoal(prev => { return { ...prev, type } })
    }

    function handleDeadlineDate(deadlineDate) {
        setGoal(prev => { return { ...prev, deadlineDate } })
    }

    function handleDurationChange(duration) {
        let calories = Math.floor(Math.random() * duration + 1); // calculate by each type

        setGoal(prev => { return { ...prev, duration: parseInt(duration), calories } })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newGoal = {...goal, dateAdd: new Date()}; // dateAdd with Date not quite good. we will replace them in future

        // send to database logic...
        setGoalList(prev => { return [ ...prev, newGoal ] })
    }

    // console.log(goal);
    console.log(goalList);

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0">
            <div className="fixed top-0 bottom-0 left-0 right-0"></div>
            <div className="z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-xl w-550 rounded-b-md">
                {/* top */}
                <div className="flex justify-between items-center bg-main-purple text-white px-4 py-2 rounded-t-md">
                    <span className="font-bold">Create Goal</span>
                    <span className="cursor-pointer font-bold" onClick={() => setCloseModal(false)}>&#x2715;</span>
                </div>

                {/* modal content */}
                <form onSubmit={handleSubmit}>
                    <div className="px-4 py-2">
                        <div>
                            <span className="font-semibold">Choose Activity</span>
                        </div>
                        <div>
                            <select className="border px-2 py-1 rounded-md" name="type" defaultValue={"default"} onChange={(e) => handleTypeChange(e.target.value)} required >
                                <option value="default" disabled>Select activity</option>
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
                                    <input className="px-2 py-1 border rounded-md w-full" type="date" onChange={(e) => handleDeadlineDate(e.target.value)} />
                                </div>
                            </div>

                            {/* duration */}
                            <div className="w-1/3">
                                <div>
                                    <span className="font-semibold text-sm">Duration (Minutes)</span>
                                </div>
                                <div>
                                    <input className="px-2 py-1 border rounded-md w-full" type="number" placeholder="Enter duration" min="0" max="100000" onChange={(e) => handleDurationChange(e.target.value)} />
                                </div>
                            </div>

                            {/* energy burn */}
                            <div className="w-1/3">
                                <div>
                                    <span className="font-semibold text-sm">Energy burn (Calories)</span>
                                </div>
                                <div>
                                    <input className="px-2 py-1 border rounded-md w-full" type="number" value={goal.calories} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="px-4 py-4 flex justify-end items-center gap-x-2 text-white">
                        <button className="bg-main-purple px-4 py-1 rounded-md" >Create</button>
                        <button className="bg-main-pink px-4 py-1 rounded-md" onClick={() => setCloseModal(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GoalForm;
