import React, { Fragment } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client/react";
//components
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import LaunchesFeed from '../../components/LaunchesFeed'

const GET_LAUNCHES_QUERY = gql`
    {
        launchesPast(limit:15) {
            mission_name
            id
            details
            launch_site {
                site_name_long
            }
            links {
                article_link
                flickr_images
            }
            
        }
    }
`;

const PastLaunches = () => {

    const { data, loading, error } = useQuery(GET_LAUNCHES_QUERY)
    if (loading) return <Loader />
    if (error) return <Error />

    const launches = data.launchesPast.filter(launch => launch.links.article_link && launch.links.flickr_images.length > 0)

    return (
        <Fragment>
            <h1 className="display-4 text-center my-5 pt-5 text-light">Past Launches</h1>
            <LaunchesFeed launches={launches} />
        </Fragment>
    );
};

export default PastLaunches;
