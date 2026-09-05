import { useEffect } from "react";

export function RegisterServiceWorker() {
  useEffect(() => {
    if (!import.meta.env.PROD) return;
    if (!("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.register("/sw.js").catch(() => {
      /* install still works without a worker */
    });
  }, []);
  return null;
}
