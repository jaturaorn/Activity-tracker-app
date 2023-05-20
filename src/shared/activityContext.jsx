import { createContext, useContext, useEffect, useReducer } from "react";
import { useFetch } from "./useFetch.js"
import axios from "axios";
import { useAuth } from "./authContext.jsx";
import { firebaseAuth } from "./firebase.js";


const ActivityContext = createContext();
const ActivityDispatchContext = createContext();

export function useActivity() {
    return useContext(ActivityContext);
}

export function useActivityDispatch() {
    return useContext(ActivityDispatchContext)
}

export function ActivityProvider({ children }) {
    const [activityList, dispatch] = useReducer(activityReducer, []);
    const { token, userId } = useAuth();

    console.log("Fetching...");

    useEffect(() => {
        let mounted = false;

        if (!mounted) {
            fetchActivity();
        }
        return () => mounted = true;
    }, [userId, token]);

    async function fetchActivity() {
        try {
            const res = await axios.get("http://127.0.0.1:4001/api/activity", {
                headers: { "x-access-token": token, "x-user-id": userId },
            });
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.data);
            dispatch({
                type: "fetch",
                payload: {
                    data: res.data.data,
                }
            })
        } catch (error) {
            console.log("Error fetching...");
            console.log(error);
        }
    }

    async function addActivity(activity) {
        try {
            const res = await axios.post("http://127.0.0.1:4001/api/activity", activity, {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId,
                }
            });
            console.log("addActivty() response from server : ", res.data);
            fetchActivity();
        } catch (error) {
            console.log(error);
        }
    }

    async function updateActivity(activityId, activity) {
        try {
            const res = await axios.put(`http://127.0.0.1:4001/api/activity/${activityId}`, activity, {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId,
                }
            })
            console.log("Edit id :", activityId);
            console.log("Edit response : ", res.data);

            fetchActivity();
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteActivity(activityId) {
        console.log("Delete", userId);
        // console.log(activity);
        // send request delete to database.
        try {
            const res = await axios.delete(`http://127.0.0.1:4001/api/activity/${activityId}`, {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId,
                }
            });
            // activityDispatch({ type: "delete", payload: { activityId: activity._id, } })
            console.log("delete response : ", res.data);
            console.log("Deleted activity.");
            fetchActivity();
        } catch (error) {
            console.log("Error delete activity ", error);
        }
    }


    const activityDispatch = {
        addActivity,
        updateActivity,
        deleteActivity,
    }

    return (
        <ActivityContext.Provider value={activityList}>
            <ActivityDispatchContext.Provider value={activityDispatch}>
                {children}
            </ActivityDispatchContext.Provider>
        </ActivityContext.Provider>
    )
}

function activityReducer(currentActivityList, action) {
    switch (action.type) {
        // case "add": {
        //     const { data } = action.payload;
        //     console.log("new data ", data);
        //     console.log("old data ", currentActivityList);
        //     return [
        //         ...currentActivityList,
        //         data
        //     ]
        // }

        // case "delete": {
        //     const { activityId } = action.payload;
        //     const updateList = currentActivityList.filter(activity => activity._id !== activityId);
        //     return updateList;
        // }

        // case "edit": {

        // }

        case "fetch": {
            const { data } = action.payload;
            console.log("activity reducer fetch data.")
            return data;
        }
    }
}