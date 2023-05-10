
function GoalTracker({test}) {
    console.log("GoalTracker render...")
    return (
        <div className="col-span-2">
            <div className="bg-main-purple px-4 py-2">
                <h1 className="text-white font-semibold">Your Goals</h1>
            </div>
            <div>
                <button className="bg-main-pink text-white px-2 py-1">New Goal</button>
                <GoalList />
            </div>
        </div>
    )
}

function GoalList() {
    console.log("GoalList render...")
    return (
        <div>
            <GoalCard />
        </div>
    )
}

function GoalCard() {
    console.log("GoalCard render...")
    console.log("================================================")
    return (
        <div>
            <h1>Goal card</h1>
        </div>
    )
}

export default GoalTracker;