import React from "react";
const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark">
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto ms-3 text-white text-decoration-none">
        <span className="fs-4">Start Bootstrap</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;