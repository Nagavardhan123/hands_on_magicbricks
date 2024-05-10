import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import AdminNavbar from '../components/adminNavbar';
import Footer from '../components/Footer';
import AdminSidebar from '../components/adminddSidebar';
import AdminUserCard from '../components/usercard';

const AdminHome = () => {
    const [selectedUser, setSelectedUser] = useState(null); // State to store the selected user

    const handleUserClick = (user) => {
        setSelectedUser(user); // Set the selected user when clicked
    };

    return (
        <>
        <div className="container-fluid bg-white">
                <AdminNavbar />
        </div>
        <div className=" container-fluid mb-5">
            <div className="row">
                <div className="col-md-3" style={{ overflowY: 'auto' }}>
                    <AdminSidebar onUserClick={handleUserClick} /> {/* Pass the click handler to the sidebar */}
                </div>
                <div className="col-md-9">
                    {/* Display the selected user details as a card */}
                    {selectedUser && <AdminUserCard user={selectedUser} />}
                </div>
            </div>
        </div>    
        <div className='container-fluid mt-3'>
            <Footer />
        </div>
        </>
    );
}

export default AdminHome;
