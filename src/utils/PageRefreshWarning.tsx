import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";

// page refresh warning if carts or orders data is exists
const PageRefreshWarning = () => {
  const carts = useAppSelector((state) => state.carts.items);
  const currentOrder = useAppSelector((state) => state.orders.currentOrder);

  useEffect(() => {
    const handleBeforeUnload = (e: { returnValue: string }) => {
      // Check if the carts is not empty
      if (carts?.length !== 0 || currentOrder !== null) {
        // Custom warning message
        const warningMessage =
          "Your carts is empty. Are you sure you want to leave?";
        e.returnValue = warningMessage;
        return warningMessage;
      }
      return null;
    };

    // Listen for the page refresh or unload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });

  return null;
};

export default PageRefreshWarning;
