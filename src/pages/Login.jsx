import { useEffect, useState } from "react";
import googleIcon from "../assets/google.png"
import { GoogleAuthProvider, getAdditionalUserInfo, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { firebaseAuth, googleProvider } from "../shared/firebase.js";
import { AuthService } from "../shared/authService.js";
import { Link, useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../shared/authContext";

function Login() {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const authDispatch  = useAuthDispatch();
    const navigate = useNavigate();

    function handleUserInput(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    async function handleUserLoginWithEmailAndPassword() {
        console.log("Login with email and password...");
        try {
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, userInfo.email, userInfo.password);
            console.log(userCredential.user);
            const token = await userCredential.user.getIdToken();

            console.log("TokenID", token);

            // authDispatch({
            //     type: "login",
            //     payload: {
            //         token,
            //     }
            // })
            navigate("/dashboard", { replace: true });
            console.log("navigate to dashboard.");
        } catch (error) {
            setErrorMessage("Incorrect username or password.");
        }
    }

    async function handleGoogleLogin() {
        try {
            console.log("Login With Google...");
            const result = await signInWithPopup(firebaseAuth, googleProvider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.idToken;
            const token = await result.user.getIdToken();

            const user = result.user;
            const userId = user.uid;
            const userEmail = user.email;

            console.log("User credential : " + getAdditionalUserInfo(result).profile);
            console.log("User credential : " + getAdditionalUserInfo(result).username);
            console.log("User what is this ? : " + user);
            console.log("Token : ", token);

            console.log("setting token.");
            console.log("setting token successful.");


            // console.log(userCredential.user);

            // authDispatch({
            //     type: "login",
            //     payload: {
            //         token
            //     }
            // })

            navigate("/dashboard", { replace: true });
        } catch (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);

            setErrorMessage("Incorrect username or password.", errorCode, errorMessage);
        }
    }

    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black z-10 opacity-30"></div>
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 bg-[url('https://images.unsplash.com/photo-1555435509-c1e95c453525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80')] bg-cover"></div>
            <div className="z-10 bg-main-purple w-400 px-12 py-5 rounded-t-lg shadow-lg shadow-gray-900 drop-shadow-xl">
                <h1 className="text-white text-4xl font-bold text-center">Log In</h1>
            </div>

            <div className="z-10 w-400 bg-white rounded-b-lg shadow-lg shadow-gray-900 drop-shadow-xl">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="p-12 flex flex-col gap-5">
                        <div>
                            <h1 className="text-3xl font-semibold text-center">Welcome Back!</h1>
                        </div>
                        <div>
                            <label className="block pb-1" htmlFor="email">Email</label>
                            <input className="block w-full border-gray-300 border-2 py-2 px-4 rounded-md" type="text" id="email" name="email" placeholder="Your email" onChange={handleUserInput} />
                        </div>
                        <div>
                            <label className="block pb-1" htmlFor="password">Password</label>
                            <input className="block w-full border-gray-300 border-2 py-2 px-4 rounded-md" type="password" id="password" name="password" placeholder="Password" onChange={handleUserInput} />
                        </div>
                        <div>
                            <button className="bg-main-pink text-white font-semibold w-full py-2 px-4 rounded-sm" onClick={() => handleUserLoginWithEmailAndPassword()} >Log In</button>
                        </div>
                        <div>
                            <button className="w-full py-2 px-4 text-gray-500 font-semibold shadow-md shadow-gray-300 rounded-sm" onClick={() => handleGoogleLogin()} >
                                <img className="inline-block w-5 mr-4" src={googleIcon} alt="google icon" /> Continue with Google
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="">Don't have an account? <Link className="text-blue-600 underline" to="/register">Sign Up</Link></span>
                        </div>
                    </div>
                </form>
                {
                    errorMessage.length > 0 ?
                        <div className="w-full bg-red-600 text-white py-1 rounded-b-md">
                            <h1 className="text-center">{errorMessage}</h1>
                        </div>
                        : null
                }
            </div>
        </div>
    );
}

export default Login;