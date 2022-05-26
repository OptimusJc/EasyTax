import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// react imports
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

import IndividualDashboard from "./pages/dashboard/individualDash/IndividualDashboard.jsx";
import PayeDashboard from "./pages/dashboard/payeDash/PayeDashboard";
import WitholdingDashboard from "./pages/dashboard/witholdingDash/WitholdingDashboard";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Paye from "./pages/paye/Paye";
import WitholdingVAT from "./pages/witholding/WitholdingVAT";
import IndividualTax from "./pages/individual/IndividualTax";
import Contact from "./pages/contact/Contact";
import ForgotPassword from "./pages/forgot/ForgotPassword";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<App />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/individual-dash"
                    element={<IndividualDashboard />}
                />
                <Route
                    path="/witholding-dash"
                    element={<WitholdingDashboard />}
                />
                <Route path="/paye-dash" element={<PayeDashboard />} />
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/paye" element={<Paye />} />
                <Route path="/witholding-vat" element={<WitholdingVAT />} />
                <Route path="/individual" element={<IndividualTax />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
