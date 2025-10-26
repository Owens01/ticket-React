import React, { useEffect } from "react";
import { AlertCircle, CheckCircle, X } from "lucide-react";
import type { ToastState } from "./../../hooks/useToast";

interface Props {
  toast: ToastState;
  onClose: () => void;
}

export const Toast: React.FC<Props> = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${
        toast.type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      {toast.type === "success" ? (
        <CheckCircle size={20} />
      ) : (
        <AlertCircle size={20} />
      )}
      <span className="min-w-[200px]">{toast.message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-80">
        <X size={18} />
      </button>
    </div>
  );
};
