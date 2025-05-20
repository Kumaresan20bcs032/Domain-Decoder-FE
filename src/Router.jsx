import { BrowserRouter, Routes, Route } from "react-router";
import DashBoard from "./Pages/Dashboard";
import DnsLookUp from "./Pages/DnsLookUp";
import SslViewer from "./Pages/SslViewer";


// import React from "react";
// import ReactDOM from "react-dom/client";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="dns-lookup" element={<DnsLookUp />} />
                    <Route path="ssl-viewer" element={<SslViewer />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Router;

