import React from "react";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { DashboardPage } from "./pages/DashboardPage";
import { TicketManagementPage } from "./pages/TicketManagementPage";
import { useToast } from "./hooks/useToast";
import { Toast } from "./components/common/Toast";
import { useTickets } from "./hooks/useTickets";
import { auth } from "./utils/auth";

export const App: React.FC = () => {
  const [route, setRoute] = React.useState<string>(() =>
    auth.isAuthenticated() ? "dashboard" : "landing"
  );
  const { toast, showToast, closeToast } = useToast();
  const { tickets, createTicket, updateTicket, deleteTicket } = useTickets();

  const handleLogin = () => setRoute("dashboard");
  const handleLogout = () => {
    auth.logout();
    setRoute("landing");
  };

  return (
    <div className="">
      {toast && <Toast toast={toast} onClose={closeToast} />}

      {route === "landing" && <LandingPage onNavigate={setRoute} />}
      {route === "login" && (
        <LoginPage
          onNavigate={setRoute}
          onLogin={handleLogin}
          showToast={showToast}
        />
      )}
      {route === "signup" && (
        <SignupPage
          onNavigate={setRoute}
          onLogin={handleLogin}
          showToast={showToast}
        />
      )}
      {route === "dashboard" && (
        <DashboardPage
          onNavigate={setRoute}
          onLogout={handleLogout}
          tickets={tickets}
        />
      )}
      {route === "tickets" && (
        <TicketManagementPage
          onNavigate={setRoute}
          onLogout={handleLogout}
          showToast={showToast}
          tickets={tickets}
          createTicket={createTicket}
          updateTicket={updateTicket}
          deleteTicket={deleteTicket}
        />
      )}

    
    </div>
  );
};
