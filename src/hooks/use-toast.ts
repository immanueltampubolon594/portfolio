import { useState } from "react";

export function useToast() {
  return {
    toast: (msg: { title?: string; description?: string }) => {
      console.log(msg);
    },
  };
}

export function toast(msg: { title?: string; description?: string }) {
  console.log(msg);
}