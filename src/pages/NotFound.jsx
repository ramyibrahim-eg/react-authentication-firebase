import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="number">404</div>
      <div className="text">page not found</div>
      <br />
      <Link to="/">
        <Button variant="dark" size="lg">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
