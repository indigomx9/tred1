import React from "react";
import { TheChild } from "./TheChild";

export const Home = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1 className="banner">Home</h1>
            <TheChild color="red" />
        </React.Fragment>
    );
};

