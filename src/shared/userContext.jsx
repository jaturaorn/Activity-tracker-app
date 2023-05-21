
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { firebaseAuth } from "./firebase";
import { useAuth } from "./authContext";
import axios from "axios";

const UserContext = createContext(null);
const UserDispatch = createContext(null);

export function useUser() {
    return useContext(UserContext);
}

export function useUserDispatch() {
    return useContext(UserDispatch);
}

export function UserProvider({ children }) {
    const [user, dispatch] = useReducer(userReducer, {
        username: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        height: 0,
        weight: 0,
        profileImage: "",
        createDate: "",
        userId: "",
    });

    const { token, userId } = useAuth();

    async function createUser(user) {
        console.log("send to usercontext with ", user)
        try {
            console.log(token, userId);
            const res = await axios.post("http://127.0.0.1:4001/api/user", user, {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId
                }
            }) 

            console.log("response create user from server ", res.data);
            console.log("response create user from server ", res.status);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchUser() {
        
    }

    const userDispatch = {
        createUser,
        fetchUser
    }

    return (
        <UserContext.Provider value={user}>
            <UserDispatch.Provider value={userDispatch}>
                {children}
            </UserDispatch.Provider>
        </UserContext.Provider>
    )
}

function userReducer(currentUser, action) {
    switch (action.type) {
        case "fetch": {
            console.log("username");
            const { user } = action.payload;
            return { ...currentUser, user };
        }
    }
}