import React from "react";
import Card from "./card";
const Container = () => {
    return (
        <>
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