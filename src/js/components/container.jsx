import React from "react";
import Card from "./card";
import Jumbotron from "./jumbotron";
const Container = () => {
    return (
        <>
            {/* JUMBOTRON */}
        <Jumbotron />
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