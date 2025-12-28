import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Form from "./form/Form";
import FeedBackForm from "./form/FeedBackForm";




function AppWrapper() {
    return (
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/form" element={<Form />} />
                <Route path="/feedBack" element={<FeedBackForm/>} />
            </Routes>

    );
}

export default AppWrapper;
