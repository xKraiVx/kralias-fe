import { useEffect, useRef } from "react";

export function useNavigationOrUnload(callback: () => void) {
  const firstRender = useRef(true);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    return () => {
      console.log("Navigation or unload detected, executing callback.");

      callbackRef.current();
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      console.log("Navigation or unload detected, executing callback.");

      callbackRef.current();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
}
