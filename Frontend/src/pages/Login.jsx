import React, {useState} from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login', formData);
            const { token } = response.data; // Supposons que le token est renvoyé dans la réponse du backend
            localStorage.setItem('token', token); // Stocker le token dans le localStorage
            console.log('Login successful!'); // Afficher un message de succès dans la console
            window.location.href = '/users'; // Rediriger vers la page de tableau de bord après une connexion réussie
        } catch (error) {
            console.error('Login failed:', error);
            // Gérer les erreurs de connexion ici (par exemple, afficher un message d'erreur à l'utilisateur)
        }
    };



    return (
        <div className="bg-white relative">
            <div
                className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
                <div className="flex flex-col items-center w-full pr-10 pb-20 pl-10 lg:flex-row">
                    <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                            <img
                                src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                                className="btn-"/>
                        </div>
                    </div>
                    <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                        <div
                            className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Log in to
                                your account</p>
                            <form onSubmit={handleSubmit} className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                    <input type="email"
                                           id="email"
                                           name="email"
                                           value={formData.email}
                                           onChange={handleChange}
                                           placeholder="E-mail"
                                           className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                                    <input type="password"
                                           id="password"
                                           name="password"
                                           value={formData.password}
                                           onChange={handleChange}
                                           placeholder="Password"
                                           className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <button type="submit" className="relative">
                                    <div
                                        className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">Submit
                                    </div>
                                </button>
                            </form>
                        </div>
                        <svg viewBox="0 0 91 91"
                             className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300 fill-current">
                            {/* Your SVG content */}
                        </svg>
                        <svg viewBox="0 0 91 91"
                             className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current">
                            {/* Your SVG content */}
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
