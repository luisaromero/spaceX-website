import React, { Fragment } from 'react';
import RocketHeader from '../RocketHeader';
import TechInfo from '../TechInfo';

const Rocket = ({ rocket }) => {
    const { id, name, height, diameter, stage, cost_per_lunch, engines } = rocket
    return (
        <Fragment>
            <div className="rocket d-flex flex-column align-items-center justify-content-around">
                <RocketHeader id={id} name={name} />

            </div>

        </Fragment>
    )
};

export default Rocket;
