import { useEffect, useState } from "react";

export type TicketStatus = "open" | "in_progress" | "closed";
export type TicketPriority = "low" | "medium" | "high";

export interface Ticket {
  id: number;
  title: string;
  description?: string;
  status: TicketStatus;
  priority: TicketPriority;
}

const STORAGE_KEY = "tickets";

export function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as Ticket[]) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  }, [tickets]);

  const createTicket = (t: Omit<Ticket, "id">) => {
    const newTicket: Ticket = { ...t, id: Date.now() };
    setTickets((prev) => [...prev, newTicket]);
    return newTicket;
  };

  const updateTicket = (id: number, payload: Partial<Ticket>) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...payload } : t))
    );
  };

  const deleteTicket = (id: number) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  return {
    tickets,
    setTickets,
    createTicket,
    updateTicket,
    deleteTicket,
  } as const;
}
