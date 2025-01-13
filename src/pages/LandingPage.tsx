import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle'; // Assuming you have a theme toggle component
import Navbar from './Navbar';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white mt-16">
        <div className="text-center space-y-4 max-w-3xl">
          <h1 className="text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s">
            Welcome to PlanSchedular
          </h1>
          <p className="text-lg animate__animated animate__fadeIn animate__delay-2s">
            Your ultimate tool to organize tasks, manage time, and boost productivity! PlanSchedular helps you stay on top of your to-do lists, deadlines, and personal goals with ease.
          </p>

          <p className="text-md text-gray-100 mt-4 animate__animated animate__fadeIn animate__delay-3s">
            Whether you're planning daily tasks or long-term projects, PlanSchedular is here to help you streamline your work and ensure that you meet your deadlines. Stay focused and get more done with our intuitive task management system.
          </p>

          <Link to="/signup">
          <Button size="lg" className="mt-6 bg-gray-800 text-white hover:bg-gray-700 transition-colors animate__animated animate__fadeIn animate__delay-4s">
            Get Started
          </Button>
          </Link>
        </div>
      </main>

      {/* Additional Content Section */}
      <section className="bg-white py-16 px-4 text-gray-900">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">Why Choose PlanSchedular?</h2>
          <p className="text-lg">
            With PlanSchedular, you’ll get a seamless and powerful experience to manage your tasks. Here’s why we are the best choice:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Organize Your Tasks</h3>
              <p>
                Create and manage tasks easily. Set deadlines, priorities, and get notified when it’s time to complete them.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Track Your Progress</h3>
              <p>
                Keep track of your daily, weekly, and monthly goals. Stay motivated by seeing your progress in real-time.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Collaborate with Teams</h3>
              <p>
                Easily collaborate with your team members by assigning tasks, setting deadlines, and tracking the team’s progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="mb-4">
          <p>Contact us: <a href="mailto:support@planschedular.com" className="underline">support@planschedular.com</a></p>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} PlanSchedular. All rights reserved.</p>
          <p>Licensed under MIT License.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;