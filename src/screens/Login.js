import React, { useState } from 'react';
import Home from './Home';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'nagvardhan99@gmail.com' && password === 'Naga@123') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {loggedIn ? (
        <Home username={username} handleLogout={handleLogout} />
      ) : (
        <div>
          <h1>Login</h1>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleChangeUsername} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handleChangePassword} />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
