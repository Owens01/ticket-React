import React from "react";
import { LogOut, Plus } from "lucide-react";
import { TicketForm } from "./../components/tickets/TicketForm";
import { TicketList } from "./../components/tickets/TicketList";
import { TicketView } from "./../components/tickets/TicketView";
import type { Ticket } from "./../hooks/useTickets";

interface Props {
  onNavigate: (p: string) => void;
  onLogout: () => void;
  showToast: (m: string, t: "success" | "error") => void;
  tickets: Ticket[];
  createTicket: (t: Omit<Ticket, "id">) => Ticket;
  updateTicket: (id: number, payload: Partial<Ticket>) => void;
  deleteTicket: (id: number) => void;
}

export const TicketManagementPage: React.FC<Props> = ({
  onNavigate,
  onLogout,
  showToast,
  tickets,
  createTicket,
  updateTicket,
  deleteTicket,
}) => {
  const [showForm, setShowForm] = React.useState(false);
  const [editing, setEditing] = React.useState<Ticket | null>(null);
  const [viewing, setViewing] = React.useState<Ticket | null>(null);

  const handleCreate = (payload: Omit<Ticket, "id">) => {
    createTicket(payload);
    showToast("Ticket created successfully", "success");
    setShowForm(false);
  };

  const handleUpdate = (payload: Omit<Ticket, "id">) => {
    if (!editing) return;
    updateTicket(editing.id, payload as Partial<Ticket>);
    showToast("Ticket updated successfully", "success");
    setEditing(null);
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this ticket?")) return;
    deleteTicket(id);
    showToast("Ticket deleted successfully", "success");
    setViewing(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-blue-600">Trackit </div>
              <div className="flex gap-4">
                <button
                  onClick={() => onNavigate("dashboard")}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600"
                >
                  Dashboard
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Ticket Management
            </h1>
            <button
              onClick={() => {
                setShowForm(true);
                setEditing(null);
              }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              <Plus size={20} /> New Ticket
            </button>
          </div>

          {showForm && (
            <TicketForm
              initial={editing ?? undefined}
              onCancel={() => {
                setShowForm(false);
                setEditing(null);
              }}
              onSubmit={(data) =>
                editing ? handleUpdate(data) : handleCreate(data)
              }
            />
          )}

          {viewing && (
            <TicketView
              ticket={viewing}
              onClose={() => setViewing(null)}
              onEdit={(t) => {
                setEditing(t);
                setShowForm(true);
                setViewing(null);
              }}
              onDelete={handleDelete}
            />
          )}

          <TicketList
            tickets={tickets}
            onView={(t) => {
              setViewing(t);
              setShowForm(false);
              setEditing(null);
            }}
            onEdit={(t) => {
              setEditing(t);
              setShowForm(true);
              setViewing(null);
            }}
            onDelete={handleDelete}
          />
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
