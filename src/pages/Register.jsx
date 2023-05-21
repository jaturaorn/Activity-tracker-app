import { useState } from "react";
import googleIcon from "/src/assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from "firebase/auth";
import { firebaseAuth, googleProvider } from "../shared/firebase.js";
import { useUserDispatch } from "../shared/userContext";


function Register() {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const { createUser } = useUserDispatch();
    const navigate = useNavigate();

    function handleUserInput(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    async function handleUserSignUpWithEmailAndPassword() {
        try {
            console.log("Sign In With Email And Password...");
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, userInfo.email, userInfo.password);
            // console.log("new user credential ", userCredential.user);

            const displayName = userCredential.user.displayName ;
            const email =  userCredential.user.email ;
            const photoURL = userCredential.user.photoURL ;

            await createUser({ firstName: displayName, username: email, profileImage: photoURL })
            console.log("(USER WITH MAIL SIGNUP) -- send new user to store in database.")

            // navigate("/login", { replace: true });
            navigate("/dashboard", { replace: true });
            console.log("navigate to login page.");
        } catch (error) {
            console.log(error.message);
            setErrorMessage("The provided information is incorrect or incomplete.");
        }
    }

    async function handleGoogleSignUp() {
        try {
            console.log("SignUp With Google...");
            const userCredential = await signInWithPopup(firebaseAuth, googleProvider);
            const credential = GoogleAuthProvider.credentialFromResult(userCredential);
            console.log(credential);

            // with this methods should check database firstkkkkkkkkkkkk


            const displayName = userCredential.user.displayName ;
            const email =  userCredential.user.email ;
            const photoURL = userCredential.user.photoURL ;
            await createUser({ firstName: displayName, username: email, profileImage: photoURL })
            console.log("(WITH GOOGLE SIGNUP) -- send new user to store in database.")
        
            navigate("/dashboard", { replace: true });
            console.log("navigate to dashboard.");
        } catch (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(errorCode, errorMessage);
            setErrorMessage("The provided information is incorrect or incomplete.");
        }
    }

    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black z-10 opacity-50"></div>
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 bg-[url('https://images.unsplash.com/photo-1621886178958-be42369fc9e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80')] bg-cover"></div>

            <div className="z-20 bg-main-purple w-400 px-12 py-5 rounded-t-lg shadow-lg shadow-gray-900 drop-shadow-xl">
                <h1 className="text-white text-4xl font-bold text-center">Join JustFit today, it's Free</h1>
            </div>
            <div className="z-20 w-400 bg-white rounded-b-lg shadow-lg shadow-gray-900 drop-shadow-xl">
                <form onClick={(e) => e.preventDefault()}>
                    <div className="p-12 flex flex-col gap-5">
                        <div>
                            <h1 className="text-3xl font-semibold text-center">Welcome to JustFit</h1>
                        </div>
                        <div>
                            <label className="block pb-1" htmlFor="email">Email</label>
                            <input className="block w-full border-gray-300 border-2 py-2 px-4 rounded-md" type="email" id="email" name="email" placeholder="Your email" onChange={handleUserInput} />
                        </div>
                        <div>
                            <label className="block pb-1" htmlFor="password">Password</label>
                            <input className="block w-full border-gray-300 border-2 py-2 px-4 rounded-md" type="password" id="password" name="password" placeholder="Password" onChange={handleUserInput} />
                        </div>
                        <div>
                            <label className="block pb-1" htmlFor="confirm-password">Confirm Password</label>
                            <input className="block w-full border-gray-300 border-2 py-2 px-4 rounded-md" type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" onChange={handleUserInput} />
                        </div>
                        <div>
                            <button className="bg-main-pink text-white font-semibold w-full py-2 px-4 rounded-sm" onClick={() => handleUserSignUpWithEmailAndPassword()} >Sign Up</button>
                        </div>
                        <div>
                            <button className="w-full py-2 px-4 text-gray-500 font-semibold shadow-md shadow-gray-300 rounded-sm" name="google-login" onClick={() => handleGoogleSignUp()} >
                                <img className="inline-block w-5 mr-4" src={googleIcon} alt="google icon" /> Continue with Google
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="">Already a member? <Link className="text-blue-600 underline" to="/login">Log in</Link></span>
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

export default Register;