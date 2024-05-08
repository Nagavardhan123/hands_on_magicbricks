import React from 'react';

const AdminUserCard = ({ user }) => {
  return (
    <div className="user-card">
     {user.image && (
              <img src={`http://localhost:5001/${user.image}`} alt={user.name} style={{ width: '50px', height: '50px', borderRadius: '50%',marginRight:"20px" }} />
            )}
      <div className="user-details">
        <h3 className="user-name">{user.email}</h3>
      </div>
    </div>
  );
};

export default AdminUserCard;
