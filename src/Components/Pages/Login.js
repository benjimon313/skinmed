import React from 'react';

function Login() {

    
    return (
        <div className="flex flex-col md:flex-row
                        h-screen w-full
                        md:divide-x divide-gray-500
                        gap-5 md:gap-10
                        items-center justify-center
                        text-white bg-black">
            <h1 className="font-['Anton'] text-9xl">BLITZ</h1>
            <div className="flex flex-col px-10 gap-4">
                <form className="flex flex-col
                                 w-[20rem] p-10 gap-4
                                 border border-white rounded
                                 text-sm">
                    <input className="p-3
                                      w-full
                                      border border-white rounded
                                      bg-transparent"
                           id="username"
                           type="text"
                           required
                           placeholder="Phone, email, or username" />
                    <input className="p-3
                                      w-full
                                      border border-white rounded
                                      bg-transparent"
                           id="password"
                           type="password"
                           required
                           placeholder="Password" />
                    <button className="py-3
                                       w-full
                                       border border-white rounded
                                       bg-white text-black
                                       justify-center items-center">
                        Log In
                    </button>
                    <button className="text-gray-400">Forgot password?</button>
                </form>
                <div className="flex py-4 w-[20rem] border border-white rounded items-center justify-center text-sm">
                    <span className="text-gray-400">Don't have an account? <button className="text-white">Sign Up</button></span>
                </div>
            </div>
        </div>
    );
}

export default Login;