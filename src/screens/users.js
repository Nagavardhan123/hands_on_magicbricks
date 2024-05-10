import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminUserCard from '../components/usercard';
import AdminNavbar from '../components/adminNavbar';
import AdminSidebar from '../components/adminddSidebar';
import Footer from '../components/Footer';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError('An error occurred while fetching users. Please try again later.');
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 mt-0">
                <AdminSidebar />
            </div>
          <div className="col-md-9 mt-3">
            <div className="container">
              <div className="row">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {users.map(user => (
                  <div key={user._id} className="col-md-4">
                    <AdminUserCard user={user} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
