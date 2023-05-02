import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigator = useNavigate();
  const handelLogout = async () => {
    setError("");
    try {
      await logout();
      navigator("/");
    } catch {
      setError("Failed To Log Out");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
        <Button className="btn btn-primary" onClick={handelLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default DashBoard;
