import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { LoginPage } from './pages/LoginPage';
import { LandingPage } from './pages/LandingPage';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { LabsPage } from './pages/admin/LabsPage';
import { OrdersPage } from './pages/admin/OrdersPage';
import { UsersPage } from './pages/admin/UsersPage';
import { DoctorsPage } from './pages/admin/DoctorsPage';
import { PaymentsPage } from './pages/admin/PaymentsPage';
import { ReportsPage } from './pages/admin/ReportsPage';
import { SettingsPage } from './pages/admin/SettingsPage';

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('dentflow_auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('dentflow_auth', String(isAuthenticated));
  }, [isAuthenticated]);

  const handleLoginClick = () => {
    navigate('/login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBrandClick = () => {
    navigate('/');
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate('/admin/dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-base selection:bg-primary selection:text-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                showNavLinks
                isAuthenticated={isAuthenticated}
                onBrandClick={handleBrandClick}
                onLoginClick={handleLoginClick}
                onLogout={handleLogout}
              />
              <LandingPage />
            </>
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <>
                <Navbar
                  showNavLinks={false}
                  isAuthenticated={false}
                  onBrandClick={handleBrandClick}
                  onLoginClick={handleLoginClick}
                  onLogout={handleLogout}
                />
                <main>
                  <LoginPage onSubmitSuccess={handleLoginSuccess} />
                </main>
              </>
            )
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated ? (
              <AdminDashboardPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminLayout onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<Navigate to="labs" replace />} />
          <Route path="labs" element={<LabsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
