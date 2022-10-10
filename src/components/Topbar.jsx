import { Navbar, Button } from "reactstrap";
import "./topbar.css";

import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <Navbar color="dark" className="mb-4" dark>
        <div className="navbar__center">
          <Link to="/">
            <Button color="secondary" className="mr-2">
              Product Listing
            </Button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/order">
            <Button color="secondary">Order History</Button>
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default Topbar;
