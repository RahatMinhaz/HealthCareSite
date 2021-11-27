import React from 'react';

const Service = (props) => {
    const {name, honorary, doctor, img} = props.specialist
    return (
        <div>
            <img className="mb-4 mt-3" src={img} alt="" />
            <h1 className="mb-3">{name}</h1>
            <h2>{doctor}</h2>
            <h4>{honorary}</h4>
        </div>
    );
};

export default Service;