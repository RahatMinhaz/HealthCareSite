import React from 'react';

const Phone = (props) => {
    const {doctor,phone} = props.number;
    return (
        <div>
            <h2>{doctor}</h2>
            <h4>Office Number: {phone}</h4>
        </div>
    );
};

export default Phone;