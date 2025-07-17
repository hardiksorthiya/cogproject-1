import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Table from './Pages/Dashboard/index';
import Table2 from './Pages/Dashboard/index2';
import Table3 from './Pages/Dashboard/index3';
import Dashboard1 from './Pages/Dashboard/Dashboard';
import Dashboard2 from './Pages/Dashboard/Dashboard2';
import Layout from './components/Layout';
import Layout2 from './components/Layout2';
import Layout3 from './components/Layout3';
import Layout4 from './components/Layout4';
import Layout5 from './components/Layout5';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';

function App() {
  return (
    <BrowserRouter basename="/">
          <Routes>
        <Route path="/table1" element={<Layout><Table /></Layout>} />
        <Route path="/table2" element={<Layout2><Table2 /></Layout2>} />
        <Route path="/table3" element={<Layout3><Table3 /></Layout3>} />
        <Route path="/dashboard1" element={<Layout4><Dashboard1 /></Layout4>} />
        <Route path="/dashboard2" element={<Layout5><Dashboard2 /></Layout5>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
