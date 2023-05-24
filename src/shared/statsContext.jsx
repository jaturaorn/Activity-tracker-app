import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "./authContext";
import { useActivity } from "./activityContext";
import { HOST } from "../utils/apiconfig";
import { useGoal } from "./goalContext";

const StatsContext = createContext(null);
const StatsDispatchContext = createContext(null);

export function useStats() {
    return useContext(StatsContext);
}

export function useStatsDispatch() {
    return useContext(StatsDispatchContext);
}

export function StatsProvider({ children }) {
    const [stats, dispatch] = useReducer(statsReducer, {});
    const { token, userId } = useAuth();
    const activities = useActivity();
    const goals = useGoal();

    useEffect(() => {
        let mounted = false;
        if (!mounted) fetchStats();
        return () => mounted = true;
    }, [activities, goals])

    async function fetchStats() {
        try {
            const res = await axios.get(`${HOST}/api/stats/all`, {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId
                }
            })
            console.log("response stats from server ", res.data);
            console.log("response stats from server ", res.status);

            dispatch({
                type: "fetch",
                payload: {
                    ...res.data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StatsContext.Provider value={stats}>
            <StatsDispatchContext.Provider value={dispatch}>
                {children}
            </StatsDispatchContext.Provider>
        </StatsContext.Provider>
    )
}

function statsReducer(currentStats, action) {
    switch (action.type) {
        case "fetch": {
            return action.payload;
        }
    }
}