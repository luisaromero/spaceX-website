import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client/react";
//components
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import MainHeader from '../../components/MainHeader';
//style
import './style.scss';

const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary 
        }
    }
`;


const Home = () => {
    const { data, loading, error } = useQuery(GET_COMPANY_INFO)

    if (loading) return <Loader />
    if (error) return <Error />

    return (
        <div className="home__container d-flex align-items-center text-center">
            <MainHeader
                name={data.company.name}
                description={data.company.summary}

            />

        </div>
    );
};

export default Home;
