import react,{useState} from 'react';
const Login = () =>{
    const [username,setUsername] = useState('');
    const [password,setUserPassword] = useState('');

const handleLogin = () =>{
    console.log('Logging in with : ',username,password);
};

return(
    <div className='form-container'>
        <h2>Login</h2>
        <div className='form-field'>
            <label htmlFor='username'>Username:</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='form-field'>
            <label htmlFor='password'>Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setUserPassword(e.target.value)}
            />
        </div>
        <button onClick={handleLogin}>Login</button>
    </div>
);

};

export default Login;