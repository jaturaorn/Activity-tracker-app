import ActivityCard from "./ActivityCard"
import { useActivity } from "../shared/activityContext";

function ActivityList({ setSelectedActivity, setCloseModal }) {
    const activityList = useActivity();
    return (
        <>
            {activityList.map(activity => {
                return (
                    <ActivityCard key={crypto.randomUUID()} activity={activity} setSelectedActivity={setSelectedActivity} setCloseModal={setCloseModal} />
                )
            })}
        </>
    )
}

export default ActivityList;