import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {

    if (true) {
        throw new Error('Noooo!');
    }

    if (!robots.length) {
        return <h1>Loading</h1>;
    } else {
        return (
            <div>
                {robots.map(user => {
                    return (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })}
            </div>
        );
    }
};
export default CardList;