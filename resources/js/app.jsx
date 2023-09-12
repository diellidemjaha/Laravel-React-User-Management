import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import User from './components/User';
import { createRoot } from 'react-dom/client';

function App() {

   return (
        <Router>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/addUser" element={<Adduser />} />
                <Route path="/Edituser/:id" element={<Edituser />} />
            </Routes>
        </Router>
    );
}

export default App;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);