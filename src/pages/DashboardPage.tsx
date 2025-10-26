import React from "react";
import { StatsCard } from "../components/dashboard/StatsCard";
import { LogOut } from "lucide-react";
import type { Ticket } from "./../hooks/useTickets";

interface Props {
  onNavigate: (p: string) => void;
  onLogout: () => void;
  tickets: Ticket[];
}

export const DashboardPage: React.FC<Props> = ({
  onNavigate,
  onLogout,
  tickets,
}) => {
  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-blue-600">Trackit </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Total Tickets" value={stats.total} />
            <StatsCard
              title="Open"
              value={stats.open}
              borderClass="border-l-4 border-green-500 text-green-600"
            />
            <StatsCard
              title="In Progress"
              value={stats.inProgress}
              borderClass="border-l-4 border-amber-500 text-amber-600"
            />
            <StatsCard
              title="Closed"
              value={stats.closed}
              borderClass="border-l-4 border-gray-500"
            />
          </div>

          <button
            onClick={() => onNavigate("tickets")}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-lg"
          >
            Manage Tickets
          </button>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Trackit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
