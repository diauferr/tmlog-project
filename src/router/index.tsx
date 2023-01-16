import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Landing } from "../pages/Landing";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
