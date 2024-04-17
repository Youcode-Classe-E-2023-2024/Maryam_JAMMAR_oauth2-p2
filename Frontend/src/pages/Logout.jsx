import React from 'react';
import axios from 'axios';

const handleLogout = async () => {
    try {
        // Envoyer une requête de déconnexion à votre backend
        await axios.post('http://127.0.0.1:8000/api/logout', {
            // Si nécessaire, vous pouvez inclure des données supplémentaires dans la requête
        });

        // Supprimer le jeton d'accès stocké localement
        localStorage.removeItem('access_token');

        // Rediriger l'utilisateur vers la page de connexion ou une autre page
        window.location.href = '/login'; // Par exemple, rediriger vers la page de connexion
    } catch (error) {
        // Gérer les erreurs
        console.error('Error logging out:', error);
    }
};

const Logout = () => {
    return (
        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
        </a>
    );
};

export default Logout;
