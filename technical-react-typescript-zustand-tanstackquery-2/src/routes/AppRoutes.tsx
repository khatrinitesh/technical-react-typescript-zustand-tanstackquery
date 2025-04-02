import React from 'react';
// third party library
import { createBrowserRouter } from 'react-router-dom';
// layout
import MainLayout from '../layout/MainLayout';
// pages
import Home from './../pages/Home';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
])

export default AppRoutes;
