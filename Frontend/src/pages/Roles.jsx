import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import '../assets/Role_Permissions.css';
import SideNav from '../pages/SideNav';

const Roles = () => {
    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/roles', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                setRoles(response.data);
                console.log(response.data);

            } catch (error) {
                setError(error.message);
            }
        };

        const fetchPermissions = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/permissions', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                setPermissions(response.data);
                console.log(response.data);

            } catch (error) {
                setError(error.message);
            }
        };

        fetchRoles();
        fetchPermissions();
    }, []);

    return (
        <div className="flex mt-16">
            <SideNav />
            <div className="flex justify-around px-16 ml-56 space-x-36 w-full h-full w-full">
                <div className="w-8/12 flex justify-between space-x-12 h-full">
                    <div className="w-full mx-auto flex h-full flex-col justify-center">
                        <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
                            <header className="border-b border-gray-100 px-5 py-4">
                                <div className="font-semibold text-gray-800">Manage Roles</div>
                            </header>

                            <div className="overflow-x-auto p-3">
                                <table className="w-full table-auto">
                                    <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                                    <tr>
                                        <th className="p-4">
                                            <div className="text-left font-semibold">Role</div>
                                        </th>
                                        <th className="p-4">
                                            <div className="text-center font-semibold">Action</div>
                                        </th>
                                    </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100 text-sm">
                                    {Array.isArray(roles.data) && roles.data.map((role, index) => (
                                        <tr key={role.id}>
                                            <td className="p-2">
                                                <div className="font-medium text-gray-800">{role.role}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="flex justify-center">
                                                    <button>
                                                        <svg
                                                            className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth={2}
                                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="tooltip-container">
                        <span className="tooltip w-48 text-center">Ajouter un role</span>
                        <span className="text">Ajouter</span>
                    </div>
                </div>
                <div className="w-8/12 flex justify-between space-x-12 h-full">
                    <div className="w-full mx-auto flex h-full flex-col justify-center">
                        <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
                            <header className="border-b border-gray-100 px-5 py-4">
                                <div className="font-semibold text-gray-800">Manage Permissions</div>
                            </header>

                            <div className="overflow-x-auto p-3">
                                <table className="w-full table-auto">
                                    <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                                    <tr>
                                        <th className="p-4">
                                            <div className="text-left font-semibold">Permission</div>
                                        </th>
                                        <th className="p-4">
                                            <div className="text-center font-semibold">Action</div>
                                        </th>
                                    </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100 text-sm">
                                    {Array.isArray(permissions.data) && permissions.data.map((permission, index) => (
                                        <tr key={permission.id}>
                                            <td className="p-2">
                                                <div className="font-medium text-gray-800">{permission.permission}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="flex justify-center">
                                                    <button>
                                                        <svg
                                                            className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth={2}
                                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="tooltip-container">
                        <span className="tooltip w-64 text-center">Ajouter une permission</span>
                        <span className="text">Ajouter</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roles;
