import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import OrderPage from '@/pages/OrderPage';
import ContactPage from '@/pages/ContactPage';
import ThankYouPage from '@/pages/ThankYouPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Layout() {
  const location = useLocation();
  const isThankYouPage = location.pathname === '/dziekujemy';

  return (
    <>
      {!isThankYouPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zamow" element={<OrderPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/dziekujemy" element={<ThankYouPage />} />
        </Routes>
      </main>
      {!isThankYouPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Toaster />
      <Layout />
    </Router>
  );
}

export default App;