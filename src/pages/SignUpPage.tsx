import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call)
    console.log('Signup Data:', formData);
  };

  const handleGoogleSignup = () => {
    // Add your Google signup logic here
    console.log('Google Signup');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Card style={{ maxWidth: '400px', width: '100%', padding: '20px' }}>
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label>Password</label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label>Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full mb-4">
            Sign Up
          </Button>
        </Form>
        <Button variant="outline" className="w-full mb-4" onClick={handleGoogleSignup}>
          Sign Up with Google
        </Button>
        <div className="text-center">
          <p className="text-sm">
            Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
