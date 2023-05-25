import GoalCard from "./GoalCard";

function GoalList({ goals }) {
  console.log("Goal fetch : ", goals);

  if (!goals) {
    return (
      <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-5">
      {goals.map(goal => <GoalCard key={crypto.randomUUID()} goal={goal} />)}
    </div>
  )
}

export default GoalList;