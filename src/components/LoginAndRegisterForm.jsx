import { useState } from "react";
import googleIcon from "/src/assets/google.png"

function LoginAndRegisterForm({ isLogin }) {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const footerText = isLogin ? ["Don't have an account? ", "Sign up"] : ["Already a member? ", "Log in"];

    function handleUserInput(e) {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    function handleLogin() {
        console.log("Login...")

        // validate here...
        setErrorMessage("Error username and password not match");

        // authentication here...

    }

    function handleRegister(e) {
        console.log("Register...")

        // validate here...
        setErrorMessage("Error username and password not match");

        // authentication here...

    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isLogin) {
            handleLogin()
        } else {
            handleRegister()
        }
    }

    // console.log(userInfo.email + " " + userInfo.password);

    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center relative">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 bg-[url('https://images.unsplash.com/photo-1538240175502-ec4eb4455f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover"></div>
            <div className="bg-main-purple w-400 px-12 py-5 rounded-t-lg shadow-lg shadow-gray-900 drop-shadow-xl">
                <h1 className="text-white text-4xl font-bold text-center">{isLogin ? "Log In" : "Join JustFit today, it's Free"}</h1>
            </div>
            <div className="w-400 bg-white rounded-b-lg shadow-lg shadow-gray-900 drop-shadow-xl">
                <form onSubmit={handleSubmit} >
                    <div className="p-12 flex flex-col gap-5">
                        <div>
                            <h1 className="text-3xl font-semibold text-center">{isLogin ? "Welcome back" : "Welcome to JustFit"}</h1>
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
                            <button className="bg-main-pink text-white font-semibold w-full py-2 px-4 rounded-sm" >{isLogin ? "Log In" : "Sign Up"}</button>
                        </div>
                        <div>
                            <button className="w-full py-2 px-4 text-gray-500 font-semibold shadow-md shadow-gray-300 rounded-sm">
                                <img className="inline-block w-5 mr-4" src={googleIcon} alt="google icon" />
                                Continue with Google
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="">{footerText[0]}<a className="text-blue-600 underline" href={isLogin ? "/register" : "/login"}>{footerText[1]}</a></span>
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

export default LoginAndRegisterForm;