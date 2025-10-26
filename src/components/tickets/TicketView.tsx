import React from "react";
import type { Ticket } from "./../../hooks/useTickets";
import { X } from "lucide-react";

interface Props {
  ticket: Ticket | null;
  onClose: () => void;
  onEdit: (t: Ticket) => void;
  onDelete: (id: number) => void;
}

export const TicketView: React.FC<Props> = ({
  ticket,
  onClose,
  onEdit,
  onDelete,
}) => {
  if (!ticket) return null;

  const getStatusColor = (status: Ticket["status"]) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-amber-100 text-amber-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold">{ticket.title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      <div className="mb-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
            ticket.status
          )}`}
        >
          {ticket.status.replace("_", " ").toUpperCase()}
        </span>
        <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
          {ticket.priority.toUpperCase()}
        </span>
      </div>

      <p className="text-gray-700 mb-4">
        {ticket.description || "No description provided"}
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(ticket)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(ticket.id)}
          className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
