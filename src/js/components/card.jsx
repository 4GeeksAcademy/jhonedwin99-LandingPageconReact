import React from "react";
const Card = ({ title }) => {
  return (
    <div className="col-md-3">
      <div className="card h-100 text-center shadow-sm">
        {/* PLACEHOLDER */}
        <div
          className="bg-secondary text-white d-flex align-items-center justify-content-center"
          style={{ height: "325px" }}
        >
          500 x 325
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt perspiciatis ab impedit voluptatum quia.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;