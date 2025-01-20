import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage , LandingPage, SignUpPage, TodoTask } from './pages';
import { ThemeProvider } from './components/ui/theme-provider';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todoTask" element={<TodoTask />} />
        
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;


