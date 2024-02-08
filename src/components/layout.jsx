import React from 'react';
import SideBar from './SideBar';
import Trends from './Trends';
import { Outlet } from 'react-router-dom';
import { TweetProvider } from '../Utiles/TweetContext';

function Layout({children}) {
    return (
        <>
           <TweetProvider>
            <SideBar />
            <Outlet/>
            <Trends />
            </TweetProvider>  
        </>
    );
}

export default Layout;