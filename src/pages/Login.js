// import React, { useState } from 'react';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setUserPassword] = useState('');

//     const handleLogin = () => {
//         console.log('Logging in with:', username, password);
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-xs">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//                 <div className="mb-4">
//                     <label htmlFor="username" className="block text-gray-700 mb-2">
//                         Username:
//                     </label>
//                     <input
//                         type="text"
//                         id="username"
//                         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block text-gray-700 mb-2">
//                         Password:
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                         value={password}
//                         onChange={(e) => setUserPassword(e.target.value)}
//                     />
//                 </div>
//                 <button
//                     onClick={handleLogin}
//                     className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
//                 >
//                     Login
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-500">
            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-white text-center">LOGIN</h2>
                <h3 className="text-lg text-white mb-6 text-center">Log in to your account</h3>
                <div className="mb-4">
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:border-white"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:border-white"
                        value={password}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>
                <p className="mt-4 text-center text-white/80 text-sm">
                    Can't log in? <a href="#" className="text-white hover:underline">Privacy policy Terms of use</a>
                </p>
            </div>
        </div>
    );
};

export default Login;