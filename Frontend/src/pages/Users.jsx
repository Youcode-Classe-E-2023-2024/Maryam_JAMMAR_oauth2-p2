import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import SideNav from '../pages/SideNav';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('access_token'); // Récupération du token
                const response = await axios.get('http://127.0.0.1:8000/api/users', {
                    headers: {
                        Authorization: `Bearer ${token}` // Utilisation du token dans les en-têtes
                    }
                });
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

    function handleClick() {
        console.log(users.data);
    }

    return (
        <div className=" my-16">
            <SideNav />
            <div className="flex flex-wrap mb-5 mx-80 w">
                <div className="w-full max-w-full px-3 mb-6 mx-auto">
                    <div
                        className="w-full mx-auto relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] m-5">
                        <div
                            className="mx-24 max-w-full w-full relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <div
                                className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span className="mr-3 font-semibold text-dark">Users</span>
                                    <span className="mt-1 font-medium text-secondary-dark text-lg/normal">Here you can find all users</span>
                                </h3>
                                {/*<div className="relative flex flex-wrap items-center my-2">*/}
                                {/*    <a href="javascript:void(0)"*/}
                                {/*       className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> See*/}
                                {/*        other projects </a>*/}
                                {/*</div>*/}
                            </div>

                            <div onClick={handleClick} className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                            <th className="pb-3 text-start min-w-[100px]">Username</th>
                                            <th className="pb-3 text-center min-w-[100px]">Email</th>
                                            <th className="pb-3 text-center min-w-[100px]">Role</th>
                                            <th className="pb-3 text-center min-w-[100px]"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Array.isArray(users.data) && users.data.map((user, index) => (
                                            <tr key={index}
                                                className="border-b border-dashed last:border-b-0 text-center">
                                                <td className="p-3 pl-0 text-start">
                                                    <div className="flex items-center">
                                                        <div className="flex flex-col justify-start">
                                                            <span
                                                                className="mb-1 font-semibold text-lg/normal text-secondary-inverse">{user.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3 pr-0 text-center">
                                                    <span
                                                        className="font-semibold text-light-inverse text-md/normal">{user.email}</span>
                                                </td>
                                                <td className="p-3 pr-0 text-center">
                                                    <span
                                                        className="align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex justify-around items-center">
                                                        <span
                                                            className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                                            Update role
                                                        </span>
                                                        <span
                                                            className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                                            Delete user
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Users;


/*
<div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                            <th className="pb-3 text-start min-w-[100px]">Username</th>
                                            <th className="pb-3 text-center min-w-[100px]">Email</th>
                                            <th className="pb-3 text-center min-w-[100px]">Role</th>
                                            <th className="pb-3 text-center min-w-[100px]"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Array.isArray(users) && users.map((user, index) => (
                                            <tr key={index}
                                                className="border-b border-dashed last:border-b-0 text-center">
                                                <td className="p-3 pl-0 text-start">
                                                    <div className="flex items-center">
                                                        <div className="flex flex-col justify-start">
                                                            <span
                                                                className="mb-1 font-semibold text-lg/normal text-secondary-inverse">{user.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3 pr-0 text-center">
                                                    <span
                                                        className="font-semibold text-light-inverse text-md/normal">{user.email}</span>
                                                </td>
                                                <td className="p-3 pr-0 text-center">
                                                    <span
                                                        className="align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24"
                                                             stroke-width="1.5" stroke="currentColor"
                                                             className="w-5 h-5 mr-1">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
                                                        </svg>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex justify-around items-center">
                                                        <span
                                                            className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                                            Update role
                                                        </span>
                                                        <span
                                                            className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                                            Delete user
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
 */