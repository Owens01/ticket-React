import React from "react";
import type { Ticket } from "./../../hooks/useTickets";
import { Eye, Edit2, Trash2 } from "lucide-react";

interface Props {
  tickets: Ticket[];
  onView: (t: Ticket) => void;
  onEdit: (t: Ticket) => void;
  onDelete: (id: number) => void;
}

export const TicketList: React.FC<Props> = ({
  tickets,
  onView,
  onEdit,
  onDelete,
}) => {
  if (!tickets.length)
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg">No tickets yet.</div>
    );

  return (
    <div className="space-y-4">
      {tickets.map((t) => (
        <div
          key={t.id}
          className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
        >
          <div>
            <div className="font-semibold text-gray-800">{t.title}</div>
            <div className="text-sm text-gray-500">
              {t.description
                ? `${t.description.slice(0, 80)}${
                    t.description.length > 80 ? "..." : ""
                  }`
                : "No description"}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onView(t)}
              className="p-2 hover:bg-gray-100 rounded-md"
              title="View"
            >
              <Eye size={18} />
            </button>
            <button
              onClick={() => onEdit(t)}
              className="p-2 hover:bg-gray-100 rounded-md"
              title="Edit"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => onDelete(t.id)}
              className="p-2 hover:bg-gray-100 rounded-md text-red-600"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
