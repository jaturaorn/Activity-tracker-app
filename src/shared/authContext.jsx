import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthService } from "./authService.js"
import { firebaseAuth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function useAuthDispatch() {
    return useContext(AuthDispatchContext);
}

export function AuthProvider({ children }) {
    const [credential, dispatch] = useReducer(authReducer, AuthService.getCredential());
    return (
        <AuthContext.Provider value={credential}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    )
}

export function authReducer(currentToken, action) {
    switch (action.type) {
        case "login": {
            const { token, userId } = action.payload;
            console.log("Add new token : ", token);
            AuthService.setToken(token);
            AuthService.setUserId(userId)
            return { token, userId };
        }

        case "logout": {
            const { token, userId} = action.payload;
            console.log("Remove token : ", token);
            AuthService.clearAll();
            return { token, userId };
        }

        case "refresh": {
            const { token, userId } = action.payload;
            console.log("Refresh new token : ", token);
            AuthService.setToken(token);
            AuthService.setUserId(userId)
            return { token, userId };
        }

        case "register": {
            const { token, userId } = action.payload;
            return { token, userId };
        }
    }
}