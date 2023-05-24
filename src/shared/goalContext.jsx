import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./authContext";
import { HOST } from "../utils/apiconfig.js"

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
      const resGoalAll = await axios.get(`${HOST}/api/goal/`, {
        headers: {
          "x-access-token": token,
          "x-user-id": userId
        }
      });

      const resGoalNone = await axios.get(`${HOST}/api/goal/none`, {
        headers: {
          "x-access-token": token,
          "x-user-id": userId
        }
      });

      const resGoalDone = await axios.get(`${HOST}/api/goal/done`, {
        headers: {
          "x-access-token": token,
          "x-user-id": userId
        }
      });
      const resGoalCancel = await axios.get(`${HOST}/api/goal/cancel`, {
        headers: {
          "x-access-token": token,
          "x-user-id": userId
        }
      });

      // console.log(res.status);
      console.log("55555555555555555555555555555 : ", resGoalAll.data);
      // console.log("55555555555555555555555555555 : ", resGoalAll.data.data);
      dispatch({
        type: "fetch",
        payload: {
          goalsAll: resGoalAll.data,
          goalsNone: resGoalNone.data,
          goalsDone: resGoalDone.data,
          goalsCancel: resGoalCancel.data
        }
      })

    } catch (error) {
      console.log(error);
    }
  }

  async function createGoal(goal) {
    try {
      const res = await axios.post(`${HOST}/api/goal`, goal, {
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
      const res = await axios.put(`${HOST}/api/goal/${goalId}`, { status }, {
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
      const { goalsAll, goalsDone, goalsCancel, goalsNone } = action.payload;
      return {
        goalsAll,
        goalsDone,
        goalsCancel,
        goalsNone
      };
    }
  }
}