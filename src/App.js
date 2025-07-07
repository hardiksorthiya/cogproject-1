import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './Pages/Dashboard';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';

function App() {
  return (
    <BrowserRouter basename="/cogproject-1">
      <Layout>
        <Routes>
        <Route path="/dashboard" element={
              <Dashboard />
          } />
        {/* Add more routes here as needed */}
      </Routes>
      </Layout>
      
    </BrowserRouter>
  );
}

export default App;
