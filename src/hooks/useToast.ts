import { useState, useCallback } from "react";

export type ToastState = { message: string; type: "success" | "error" } | null;

export function useToast() {
  const [toast, setToast] = useState<ToastState>(null);

  const showToast = useCallback(
    (message: string, type: "success" | "error") => {
      setToast({ message, type });
    },
    []
  );

  const closeToast = useCallback(() => setToast(null), []);

  return { toast, showToast, closeToast } as const;
}
