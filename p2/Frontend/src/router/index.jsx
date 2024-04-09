import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home.jsx';
import Login from '../page/Login.jsx';
import Register from '../page/Register.jsx';
import Users from '../page/Users.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Register />
    },
    {
        path: '/users',
        element: <Users />
    },
]);
