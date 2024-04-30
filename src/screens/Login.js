import React, { useState } from 'react';
import Home from './Home';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'nagvardhan99@gmail.com' && password === 'Naga@123') {
      setLoggedIn(true);
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
        <div class="container">
            <form action="">
            <div class="row">
                <div class="col-25">
                <label>Username:</label>
                </div>
                <div class="col-75">
                    <input type="text" value={username} onChange={handleChangeUsername} />
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                <label>Password:</label>
                </div>
                <div class="col-75">
                <input type="password" value={password} onChange={handleChangePassword} />
                </div>
            </div>
            <br/>
            <div class="row">
            <button onClick={handleLogin} style={{width:"50%"}}>Login</button>
            </div>
            </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;