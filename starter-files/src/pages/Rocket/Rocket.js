import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client/react";
import Rocket from '../../components/Rocket';
//components 

import Error from '../../components/Error';
import Loader from '../../components/Loader';

const GET_ROCKET_INFO = gql`
    query Rockets($rocketId: ID!) {
        rocket(id: $rocketId) {
            name
            height {
            feet
            meters
            }
            diameter {
            feet
            meters
            }
            stages
            cost_per_launch
            engines {
            type
            number
            propellant_1
            propellant_2
            }
    }
}
`;


const RocketPage = () => {
    const name = useParams().id;
    const location = useLocation();
    const rocketId = location.state?.id;

    const { data, loading, error } = useQuery(GET_ROCKET_INFO,
        {
            variables: { rocketId }
        })

    if (loading) return <Loader />
    if (error) return <Error />

    return <Rocket rocket={{ ...data.rocket, id: rocketId }} />;
};

export default RocketPage;
