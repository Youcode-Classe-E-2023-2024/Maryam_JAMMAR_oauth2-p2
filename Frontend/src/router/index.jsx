import React from 'react';
import Layout from '../layouts/Layout.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Users from '../pages/Users.jsx';
import NotFound from "../pages/NotFound.jsx";
import Roles from "../pages/Roles.jsx";
import Permissions from "../pages/Permissions.jsx";

const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: Register
    },
    {
        path: '/users',
        element: Users
    },
    {
        path: '/roles',
        element: Roles
    },
    {
        path: '/permissions',
        element: Permissions
    },
    {
        path: '*',
        element: NotFound
    }
];

export default routes;
