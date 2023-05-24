
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useAuth, useAuthDispatch } from "./authContext";
import axios from "axios";
import { firebaseAuth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";

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
    const authDispatch = useAuthDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                // User is sign in
                console.log("login....");
                console.log("fetch user data after login.");
                fetchUser();
            } else {

                // User is signed out
                authDispatch({
                    type: "logout",
                    payload: {
                        token: null,
                        userId: null,
                    }
                })
                console.log("I'm out!");
            }
            return () => unsubscribe();
        });
    }, [token, userId])


    async function createUser(user) {
        console.log("send to usercontext with ", user)
        try {
            const res = await axios.post("https://just-fit-backend.onrender.com/auth/register", user);
            console.log("response create user from server ", res.data);
            console.log("response create user from server ", res.status);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchUser() {
        try {
            const res = await axios.get("https://just-fit-backend.onrender.com/api/user", {
                headers: {
                    "x-access-token": token,
                    "x-user-id": userId
                }
            })

            console.log("fetch after login data ", res.data);
            console.log("fetch after login status ", res.status);

            dispatch({
                type: "fetch",
                payload: {
                    user: res.data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function updateUser(user) {
        try {
            console.log("update user with data : ", user);
            const res = await axios.put(`https://just-fit-backend.onrender.com/api/user/${userId}`, user, {
                headers: {
                    "x-access-token": token,
                }
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const userDispatch = {
        createUser,
        fetchUser,
        updateUser,
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
            console.log("current user: ", currentUser);
            console.log("new from server ", user);
            return { ...currentUser, ...user };
        }
    }
}