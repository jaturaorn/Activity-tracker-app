import axios from "axios";
import { ActivityIcon } from "../shared/ActivityIcon.js"
import { useGoalDispatch } from "../shared/goalContext.jsx";

function GoalCard({ goal }) {
    const { updateStatusGoal } = useGoalDispatch();

    async function handleDone() {
        updateStatusGoal("done", goal._id);
    }

    async function handleCancel() {
        updateStatusGoal("cancel", goal._id);
    }

    return (
        <div className="bg-main-purple text-white shadow-lg rounded-3xl px-4 py-4 max-md:px-4  hover:shadow-lg transition-all hover:shadow-main-purple hover:transition-all">
            {/* excersise type */}
            <div className="flex justify-between max-md:text-sm max-md:tracking-wide max-xl:flex-col max-xl:gap-y-4">

                {/* type icon */}
                <div className="w-1/6 flex flex-col justify-center items-center max-xl:w-full">
                    <img className="block" src={ActivityIcon.getIcon(goal.activityType)} />
                </div>

                {/* content */}
                <div className="w-4/6 px-4 max-md:px-0 max-md:pl-4 max-xl:w-full">
                    {/* goal type */}
                    <div>
                        <span className="font-semibold text-2xl">{goal.activityType}</span>
                    </div>

                    {/* energy burn */}
                    <div>
                        <span><span className="font-semibold">Energy burn: </span> {goal.energyBurn} Cal</span>
                    </div>

                    {/* duration */}
                    <div>
                        <span><span className="font-semibold">Duration: </span>{goal.duration} Hrs</span>
                    </div>

                    {/* end in */}
                    <div>
                        <span className="font-semibold">End in: </span><span>{goal.deadline} day</span>
                    </div>
                </div>

                {/* dropdown menu */}
                <div className="w-2/6 text-center flex justify-center items-center gap-x-3 max-xl:w-full max-xl:px-4">
                    {goal.status === "none" ?
                        <>
                            <div className="block w-full bg-green-500 rounded-full px-2 py-1 shadow-lg cursor-pointer" onClick={() => handleDone("done")}>Done</div>
                            <div className="block w-full bg-red-500 rounded-full px-2 py-1 shadow-lg cursor-pointer" onClick={() => handleCancel("fail")}>Cancel</div>
                        </>
                    :null}
                    {goal.status === "done" ? <div className="block w-full bg-green-500 rounded-full px-2 py-1 shadow-lg">Done</div> : null}
                    {goal.status === "cancel" ? <div className="block w-full bg-red-500 rounded-full px-2 py-1 shadow-lg">Fail</div> : null}
                </div>
            </div>
        </div>
    )
}

export default GoalCard;