import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AdminSidebar = () => {
  const fetchUsers = async () => {
    // Fetch users here if needed
  };

  return (
    <div className='sidebar mt-0 mb-2' >
      <Link to="/users" className="sidebar-item text-decoration-none " onClick={fetchUsers} >
        <FontAwesomeIcon icon={faUser} style={{height:"4vw",width:'4vh',marginLeft:"1px" }}/>
        <p>Users</p>
      </Link>
    </div>
  );
};

export default AdminSidebar;
