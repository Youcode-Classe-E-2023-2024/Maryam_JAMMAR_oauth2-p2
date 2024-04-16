import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const Permissions = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const response = await axios.get('http://127.0.0.1:8000/api/role_has_permissions', config);
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex mt-16">
            <div id="sideNav"
                 className="lg:block hidden overflow-x-hidden w-56 h-screen fixed rounded-none border-none">
                <div id="sideNav"
                     className="lg:block hidden overflow-x-hidden w-56 h-screen fixed rounded-none border-none">
                    <div className="p-4 space-y-4">
                        <a href="#" aria-label="dashboard"
                           className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                            <i className="fas fa-home text-white"></i>
                            <span className="-mr-1 font-medium">Inicio</span>
                        </a>

                        <a href="/users" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                            <i className="fas fa-wallet"></i>
                            <span>Manage Users</span>
                        </a>
                        <a href="/roles" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                            <i className="fas fa-exchange-alt"></i>
                            <span>Manage Roles</span>
                        </a>
                        <a href="/permissions"
                           className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                            <i className="fas fa-user"></i>
                            <span>Manage permissions</span>
                        </a>
                        <a href="/logout" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex justify-between mx-auto">
                <div className="mx-auto w-full max-w-5/6 rounded-sm border border-gray-200 bg-white shadow-lg">
                    <header className="border-b border-gray-100 px-5 py-4">
                        <div className="font-semibold text-gray-800">Manage Roles and Permissions</div>
                    </header>

                    <div className="overflow-x-auto p-3">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                            <tr>
                                <th className="p-2">User</th>
                                <th className="p-2">Role</th>
                                <th className="p-2">Permissions</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {Array.isArray(users.data) && users.data.map(user => (
                                    <tr key={user.id}>
                                        <td className="p-4 px-4 text-center">{user.name}</td>
                                        <td className="p-4 px-4 text-center">{user.role}</td>
                                        <td className="p-4 px-12 text-center">{user.string_agg}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Permissions;
