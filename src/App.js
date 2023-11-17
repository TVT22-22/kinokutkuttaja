import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Moviepage from "./Elokuvasivu";
import Etusivu from "./etusivu";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/etusivu" element={<Etusivu/>} />
                <Route path="/moviepage" element={<Moviepage/>} />
            </Routes>
        </Router>
    );
};

export default App;
