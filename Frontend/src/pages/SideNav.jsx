// SideNav.jsx

import React from 'react';

const SideNav = () => {
    return (
        <div id="sideNav" className="lg:block hidden overflow-x-hidden w-56 h-screen fixed rounded-none border-none">
            <div className="p-4 space-y-4">
                <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    <i className="fas fa-home text-white"></i>
                    <span className="-mr-1 font-medium">Inicio</span>
                </a>

                <a href="/users" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                    <i className="fas fa-wallet"></i>
                    <span>Manage Users</span>
                </a>
                <a href="/roles" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                    <i className="fas fa-exchange-alt"></i>
                    <span>Manage Roles and Permissions</span>
                </a>
                <a href="/permissions" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                    <i className="fas fa-user"></i>
                    <span>Role has Permissions</span>
                </a>
                <a href="/logout" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    );
};

export default SideNav;
