import React from 'react';
import axios from 'axios';
const Login = () => {
    const [error, setError] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [user, setUser] = React.useState({});
    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.get(
                'https://jsonplaceholder.typicode.com/users/1',
            );
            setUser(data);
        } catch (error) {
            setError(true);
        }
        setLoading(false);
        // setTimeout(() => {

        // }, 2000);
    };
    return (
        <div className="container">
            <span className="user">{user.name}</span>
            <form>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    disabled={!username || !password || loading}
                    onClick={handleClick}
                >
                    {loading ? 'Loading...' : 'Login'}
                </button>
                <span
                    data-testid="error"
                    style={{ visibility: error ? 'visible' : 'hidden' }}
                >
                    Something went wrong!
                </span>
            </form>
        </div>
    );
};

export default Login;
