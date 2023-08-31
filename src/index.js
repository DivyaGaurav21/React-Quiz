import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './components/App';
import ReactPage from './components/staticpage/ReactPage';
import JsPage from './components/staticpage/JsPage';
import Login from './components/staticpage/Login';
import SignUp from './components/staticpage/SignUp';
import Navigation from './components/staticcomponent/Navigation';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<App />} />
        <Route path='home' element={<App />} />
        <Route path="react" element={<ReactPage />} />
        <Route path="javascript" element={<JsPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

