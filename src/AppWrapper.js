import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Form from "./form/Form";
import FeedBackForm from "./form/FeedBackForm";
import Tickets from "./Tickets";




function AppWrapper() {
    return (
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/form" element={<Form />} />
                <Route path="/feedBack" element={<FeedBackForm/>} />
                <Route path="/tickets" element={<Tickets/>} />
            </Routes>

    );
}

export default AppWrapper;
