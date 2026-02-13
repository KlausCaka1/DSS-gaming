import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Form from "./form/Form";
import FeedBackForm from "./form/FeedBackForm";
import Tickets from "./Tickets";
import Characters from "./Characters/Characters";
import StoryDashboard from "./Story/StoryDashboard";




function AppWrapper() {
    return (
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/form" element={<Form />} />
                <Route path="/feedBack" element={<FeedBackForm/>} />
                <Route path="/tickets" element={<Tickets/>} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/story" element={<StoryDashboard/>} />
            </Routes>

    );
}

export default AppWrapper;
