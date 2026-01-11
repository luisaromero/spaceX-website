import React, { useRef } from 'react';
import useNavigation from '../../hooks/useNavigation';
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client/react";
//components
import TopMenu from './../TopMenu';
import SideMenu from './../SideMenu';
import Error from '../Error';
import Loader from '../Loader';
//style
import './style.scss'

const GET_ROCKET_NAMES = gql`
    {
        rockets(offset:1) {
            id
            name 
        }
    }
`;

const NavBar = () => {
    const navRef = useRef(null)
    const { isMobileView, isMenuOpen, setIsMenuOpen } = useNavigation(navRef)
    const { data, loading, error } = useQuery(GET_ROCKET_NAMES)

    if (loading) return <Loader />
    if (error) return <Error />


    return (
        <div className='container-fluid' ref={navRef}>
            <div className="row">
                <TopMenu
                    rockets={data.rockets}
                    isMenuOpen={isMenuOpen}
                    isMobileView={isMobileView}
                    toggleMenu={setIsMenuOpen}
                />
            </div>
            <SideMenu
                rockets={data.rockets}
                isMenuOpen={isMenuOpen}
                isMobileView={isMobileView}
                toggleMenu={setIsMenuOpen}
            />


        </div>
    )
};
export default NavBar;
