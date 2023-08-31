import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here (e.g., send login request to a server)
        const userJSON = localStorage.getItem('USER');
        const USER = JSON.parse(userJSON);
        console.log(USER)
        if (USER.username !== username && USER.password !== password) {
            alert("Your username or password is incorrect ")
        }
        alert("Login Successfully")
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl w-full space-y-8 border border-stone-400 px-10 py-16 rounded-md">
                <div>
                    <h1 className="mt-1 text-center text-3xl font-extrabold text-gray-100">
                        Log in to your account
                    </h1>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mb-7 h-[35px] w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-2xl"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mb-5 h-[35px] w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-2xl"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button
                            type="submit"
                            className="relative w-[100%] flex justify-center py-2 px-4 border text-3xl font-medium rounded-md text-white bg-slate-800 hover:bg-neutral-800 "
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
