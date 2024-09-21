/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../App.css";
const Profile = () => {
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();
      console.log(data);
      setUserdata(data);
      setLoading(false);
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="card-title text-center mb-4">User Information</h1>
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card text-white bg-secondary custom-card">
            <div className="card-body text-center ">
              <h2 className="card-title text-center mb-4">
                {userdata.firstName} {userdata.lastName}
              </h2>
              <p>
                <strong>Email:</strong> {userdata.email}
              </p>
              <p>
                <strong>Phone:</strong> {userdata.phone}
              </p>
              <p>
                <strong>Age:</strong> {userdata.age}
              </p>
              <p>
                <strong>Address:</strong> {userdata.address.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
