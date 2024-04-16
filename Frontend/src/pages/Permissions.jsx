import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import SideNav from '../pages/SideNav';

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
            <SideNav />
            <div className="mx-auto w-4/6">
                <div className=" rounded-sm border border-gray-200 bg-white shadow-lg">
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
