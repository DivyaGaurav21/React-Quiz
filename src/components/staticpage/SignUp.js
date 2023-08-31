import React, { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userNameError, setUserNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (e.target.value.match(/[^\w\s]/)) {
            setUserNameError('Username should not have special characters');
        } else {
            setUserNameError('');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!e.target.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (!e.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
            setPasswordError('Password must contain at least 8 characters, one letter, one number, and one special character.');
        } else {
            setPasswordError('');
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert('Please fill all fields');
            return;
        }
        const user = { username, email, password };
        localStorage.setItem('USER', JSON.stringify(user));
        setUsername("");
        setEmail("");
        setPassword("");
    };


    return (
        <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl w-full space-y-8 border border-stone-400 px-10 py-16 rounded-md">
                <div>
                    <h1 className="mt-1 text-center text-3xl font-extrabold text-gray-100">
                        Sign up for an account
                    </h1>
                </div>
                <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                    <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-5">
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
                                onChange={handleUsernameChange}
                                className="h-[35px] w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-2xl"
                                placeholder="Username"
                            />
                            {userNameError && <span className='text-right text-xl text-red-300'>{userNameError}</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                className="h-[35px] w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-2xl"
                                placeholder="Email"
                            />
                            {emailError && <span className='text-right text-xl text-red-300'>{emailError}</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                className="h-[35px] w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-2xl"
                                placeholder="Password"
                            />
                            {passwordError && <span className='text-right text-xl text-red-300'>{passwordError}</span>}
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="relative w-[100%] flex justify-center py-2 px-4 border text-3xl font-medium rounded-md text-white bg-slate-800 hover:bg-neutral-800"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

