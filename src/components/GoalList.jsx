import { useGoal } from "../shared/goalContext";
import GoalCard from "./GoalCard";

function GoalList() {
  const goals = useGoal();
  console.log("Goal fetch : ", goals);
  return (
    <>
      {goals.map(goal => <GoalCard key={crypto.randomUUID()} goal={goal} />)}
    </>
  )
}

export default GoalList;