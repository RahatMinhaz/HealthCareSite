import React from 'react';

const AboutDetails = (props) => {
    const { img,adv} = props.line;
    return (
        <div>
            <h2 className = "pt-5 pb-5">{adv}</h2>
            <img className = "pt-5 w-75" src={img} alt="" />
        </div>
    );
};

export default AboutDetails;