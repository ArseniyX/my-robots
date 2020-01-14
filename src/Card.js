import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className={'bg-light-green dib br3 pa3 ma2 grow'}>
            <div>
                <img src={`https://robohash.org/${id}?size=210x210`} alt="robots"/>
                <div>
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;