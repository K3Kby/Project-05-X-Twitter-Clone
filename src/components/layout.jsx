import React from 'react';
import SideBar from './SideBar';
import Trends from './Trends';
import { Outlet } from 'react-router-dom';

function Layout({children}) {
    return (
        <>
            
            <SideBar />
            <Outlet/>
            <Trends />
            
        </>
    );
}

export default Layout;