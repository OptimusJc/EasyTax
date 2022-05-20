// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.js";

// react imports
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

import Home from "./pages/home/Home";
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
