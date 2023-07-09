import React from 'react';
import './RewardsStyles.css';

function RewardsData(props) {
    return(
        <div className="r-card">
            <div className="r-image">
                <img src={props.img}></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default RewardsData;