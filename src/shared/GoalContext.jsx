import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./authContext";

const GoalContext = createContext(null);
const GoalDispatchContext = createContext(null);

export function useGoal() {
    return useContext(GoalContext);
}

export function useGoalDispatch() {
    return useContext(GoalDispatchContext);
}

export function GoalProvider({ children }) {
    const [goals, dispatch] = useReducer(goalReducer, []);
    const { token, userId } = useAuth();

    useEffect(() => {
        let mounted = false;
        if (!mounted) {
            fetchGoal();
            // createGoal();
        }
        return () => mounted = true;
    }, [token, userId]);

    async function fetchGoal() {
        try {
            const res = await axios.get("http://127.0.0.1:4001/api/goal", {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId
                }
            });

            console.log(res.status);
            console.log(res.data.data);

            dispatch({
                type: "fetch",
                payload: {
                    data: res.data.data,
                }
            })

        } catch(error) {
            console.log(error);
        }
    }

    async function createGoal(goal) {
        try {
            // const goal = {
            //     userId: Date.now(),
            //     activityType: "zumbA",
            //     deadline: Date.now(),
            //     energyBurn: 1234,
            //     duration: 302,
            //     distance: 1000,
            //     status: "none", 
            // }
            const res = await axios.post("http://127.0.0.1:4001/api/goal", goal, {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId
                }
            })

            console.log("Create new goal below.");
            console.log(res.status);
            console.log(res.data);

            fetchGoal();
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteGoal(goalId) {

    }

    async function updateStatusGoal(status, goalId) {
        try {
            const res = await axios.put(`http://127.0.0.1:4001/api/goal/${goalId}`, { status }, {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId,
                }
            });

            fetchGoal();
            console.log("Update goal status : ", res.status);
            console.log("Update goal data : ", res.data);
        } catch (error) {
            console.log(error);
        } 
    } 

    const goalDispatch = {
        createGoal,
        deleteGoal,
        updateStatusGoal,
    }

    return (
        <GoalContext.Provider value={goals}>
            <GoalDispatchContext.Provider value={goalDispatch}>
                {children}
            </GoalDispatchContext.Provider>
        </GoalContext.Provider>
    )
}

function goalReducer(currentGoal, action) {
    switch (action.type) {
        case "fetch": {
            const { data } = action.payload;
            return data;
        }
    }
}