import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage , LandingPage, SignUpPage } from './pages';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;


