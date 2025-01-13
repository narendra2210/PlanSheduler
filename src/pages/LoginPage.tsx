import React from 'react';
import { Card } from '@/components/ui/card';
import LoginForm from '@/components/form/LoginForm'; // Adjust path if necessary
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const handleLogin = (formData: { email: string; password: string }) => {
    console.log('Login Data:', formData);
    // Add your login logic here (e.g., API call)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Card style={{ maxWidth: '400px', width: '100%', padding: '20px' }}>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <LoginForm onSubmit={handleLogin} />
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account? <Link to="/signup" className="text-blue-500">Sign up here</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
