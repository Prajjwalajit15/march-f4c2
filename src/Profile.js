// Profile.js
import React, { useState, useEffect } from 'react'; 

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
