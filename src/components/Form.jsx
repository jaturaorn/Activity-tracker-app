import { useState } from "react";
import googleIcon from "/src/assets/google.png"

const Form = ({ isLogin }) => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const headerTitle = isLogin ? "Log In" : "Join JustFit today, it's Free";
    const formTitle = isLogin ? "Welcome back" : "Welcome to JustFit";
    const buttonText = isLogin ? "Log In" : "Sign Up";
    const footerText = isLogin ? ["Don't have an account? ", "Sign up"] : ["Already a member? ", "Log in"];
    const pathSelected = isLogin ? "/register" : "/login";

    const handleUserInput = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login...")

        setErrorMessage("Error username and password not match");
    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register...")

        setErrorMessage("Error username and password not match");
    }

    // console.log(userInfo.email + " " + userInfo.password);

    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center relative">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 bg-[url('')] bg-cover"></div>
            <div className="bg-main-purple w-400 px-12 py-5 rounded-t-lg shadow-lg shadow-gray-900 drop-shadow-xl">
                <h1 className="text-white text-4xl font-bold text-center">{headerTitle}</h1>
            </div>
            <div className="w-400 bg-white rounded-b-lg shadow-lg shadow-gray-900 drop-shadow-xl">
                <form >
                    <div className="p-12 flex flex-col gap-5">
                        <div>
                            <h1 className="text-3xl font-semibold text-center">{formTitle}</h1>
                        </div>
                        <div>
                            <label className="block pb-1" htmlFor="email">Email</label>
                            <input className="block w-full border-gray-300 border-2 py-2 px-4 rounded-md" type="text" id="email" name="email" placeholder="Your email" onChange={handleUserInput} />
                        </div>
                        <div>
                            <label className="block pb-1" htmlFor="password">Password</label>
                            <input className="block w-full border-gray-300 border-2 py-2 px-4 rounded-md" type="password" id="password" name="password" placeholder="Password" onChange={handleUserInput} />
                        </div>

                        {
                            isLogin ?
                                <div className="flex justify-between items-center">
                                    <div>
                                        <label> <input type="checkbox" /> Remember me</label>
                                    </div>
                                    <div>
                                        <a className="text-blue-600 underline" href="#">Forgot password</a>
                                    </div>
                                </div>
                                : null
                        }
                        <div>
                            <button className="bg-main-pink text-white font-semibold w-full py-2 px-4 rounded-sm" onClick={isLogin ? handleLogin : handleRegister} >{buttonText}</button>
                        </div>
                        <div>
                            <button className="w-full py-2 px-4 text-gray-500 font-semibold shadow-md shadow-gray-300 rounded-sm">
                                <img className="inline-block w-5 mr-4" src={googleIcon} alt="google icon" />
                                Continue with Google
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="">{footerText[0]}<a className="text-blue-600 underline" href={pathSelected}>{footerText[1]}</a></span>
                        </div>
                    </div>
                    {
                        errorMessage.length > 0 ?
                            <div className="w-full bg-red-600 text-white py-1 rounded-b-md">
                                <h1 className="text-center">{errorMessage}</h1>
                            </div>
                            : null
                    }
                </form>
            </div>
        </div>
    );
}

export default Form;