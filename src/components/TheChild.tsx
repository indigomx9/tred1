import React from "react";

type TProps = {
    color: string
}

export const TheChild = (props: TProps): JSX.Element => {
    return (
        <React.Fragment>
            <h1>{props.color}</h1>
        </React.Fragment>
    );
};

