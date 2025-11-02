import React, { useState } from 'react'; 

import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx"; 

const mainContentStyles = {
    minHeight: '60vh', 
    maxWidth: '1000px',
    margin: '30px auto',
    padding: '20px',
};


function App() {
    const [currentView, setCurrentView] = useState('home');

    const setCurrentViewHandler = (viewName) => {
        setCurrentView(viewName);
    };

    const renderContent = () => {
        if (currentView === 'login') {
            return <Login onViewChange={setCurrentViewHandler} />;
        }
        if (currentView === 'register') {
            return <Register onViewChange={setCurrentViewHandler} />;
        }
        return <Home />;
    };

    return (
        <div>
            <Navbar onViewChange={setCurrentViewHandler} />
            <main style={mainContentStyles}> 
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
}

export default App;