import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function AdminNavbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Fetch profile image path if user is logged in
            axios.get("http://localhost:5001/profile", { headers: { Authorization: token } })
                .then(response => {
                    setProfileImage(response.data.image);
                })
                .catch(error => {
                    console.error("Error fetching profile image:", error);
                });
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            setProfileImage('');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    const renderAuthLink = () => {
        if (isLoggedIn) {
            return (
                <Link className="nav-item nav-link text-white" style={{ paddingRight: "1vw" }} to="/" onClick={handleLogout}>
                    logout
                </Link>
            );
        } else {
            return (
                <Link className="nav-item nav-link" to="/">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            );
        }
    };

    return (
        <nav className="navbar navbar-expand-lg shadow p-3 mb-3 rounded bg-danger text-white ">
            <div className="container">
                <Link className="navbar-brand text-white" to="/Home">
                    <h2>magicbricks</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav ">
                 <span style={{fontSize:"2vw"}}> ADMIN PAGE</span>
                </div>
               
                <div className="navbar-nav ">
                    {renderAuthLink()}
                    {profileImage && <img className="profile-image" src={profileImage} alt="Profile" style={{ paddingLeft: "1vw" }} />}
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
