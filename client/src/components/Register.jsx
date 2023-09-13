import { useState } from 'react';
import { registerTrainer } from '../fetching';
import { useNavigate } from 'react-router-dom';

export default function Register({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const register = await registerTrainer(username, password);
        setToken(register.token);
        console.log(register);
        setUsername('');
        setPassword('');
        nav('/pokemon');
    }

    return(
        <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}