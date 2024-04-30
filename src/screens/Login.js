import React, { useState } from 'react';
import Home from './Home';
import { Container, Form, Button } from 'react-bootstrap';

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

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {loggedIn ? (
        <Home/>
      ) : (
        <Container className="container border border-black" style={{margin:"10vw 25vw", width:"50%", borderRadius:"2vw", padding:"2vw"}}>
          <h2>Login</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={handleChangeUsername}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChangePassword}
              />
            </Form.Group>
            <Button variant="danger" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default LoginPage;