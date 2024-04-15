// Layout.jsx

import React from 'react';
import login from '../pages/Login';
import Home from '../pages/Home';

// import Footer from '../pages/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            {/*<login />*/}
            <main className="content">{children}</main>
            {/*<Home />*/}
        </div>
    );
};

export default Layout;
