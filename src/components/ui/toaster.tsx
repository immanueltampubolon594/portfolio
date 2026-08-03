import { useState } from "react";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

let toastList: Toast[] = [];
let listeners: ((toasts: Toast[]) => void)[] = [];

function notify() {
  listeners.forEach((l) => l([...toastList]));
}

export function toast(props: Omit<Toast, "id">) {
  const id = Math.random().toString(36).slice(2);
  toastList.push({ id, ...props });
  notify();
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([...toastList]);

  useState(() => {
    listeners.push(setToasts);
    return () => {
      listeners = listeners.filter((l) => l !== setToasts);
    };
  });

  return { toasts, toast };
}