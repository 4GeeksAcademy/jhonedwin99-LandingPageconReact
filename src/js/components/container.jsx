import React from "react";
import Card from "./card";
const Container = () => {
    return (
        <>
            {/* JUMBOTRON */}
            <div className="container">
                <div className="p-5 mb-4 bg-dark bg-opacity-10 ">
                    <h1 className="display-4">A Warm Welcome!</h1>

                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                        ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
                        similique quaerat nam nobis illo aspernatur vitae fugiat numquam
                        repellat.
                    </p>

                    <a href="#" className="btn btn-primary btn-lg">
                        Call to action!
                    </a>
                </div>
            </div>

            {/* CARDS */}
            <div className="container my-5">
                <div className="row g-4">
                    <Card  />
                    <Card  />
                    <Card  />
                    <Card  />
                </div>
            </div>
        </>
    );
};

export default Container;