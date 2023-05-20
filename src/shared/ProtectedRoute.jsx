import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthService } from "./authService.js"
import { useAuth } from "./authContext.jsx";

function ProtectedRoute({ children }) {
    const { token } = useAuth();
    console.log("Check protected token : ", token);
    if (!token) {
        // console.log("Go back to login page.");
        return <Navigate to="/login" replace={true} />
    }
    return children;
}

export default ProtectedRoute;