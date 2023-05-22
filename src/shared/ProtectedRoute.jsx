import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext.jsx";

function ProtectedRoute({ children }) {
    const { token } = useAuth();
    // console.log("Check protected token : ", token);
    if (!token) {
        // console.log("Go back to login page.");
        return <Navigate to="/login" replace={true} />
    }
    return children;
}

export default ProtectedRoute;