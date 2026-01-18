import React, { Fragment } from 'react';
import RocketHeader from '../RocketHeader';
import TechInfo from '../TechInfo';

const Rocket = ({ rocket }) => {
    const { name, height, diameter, stages, cost_per_launch, engines } = rocket
    return (
        <Fragment>
            <div className="rocket d-flex flex-column align-items-center justify-content-around">
                <RocketHeader name={name} />
                <TechInfo name={name} rocket={{ height, diameter, stages, cost: cost_per_launch }} />

            </div>
            <TechInfo name={engines.type} engine={engines} isEngine />
        </Fragment>
    )
};

export default Rocket;
