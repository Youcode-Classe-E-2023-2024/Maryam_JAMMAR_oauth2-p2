import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import routes from "./router/index.jsx";

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Routes>
            </Layout>
        </Router>
    );
}
