import { useEffect } from "react";

const PageRefreshWarning = () => {
  //   const cart = useSelector((state) => state.cart);
  const cart = [ ];

  useEffect(() => {
    const handleBeforeUnload = (e: { returnValue: string; }) => {
      // Check if the cart is not empty
      if (cart.length !== 0) {
        // Custom warning message
        const warningMessage =
          "Your cart is empty. Are you sure you want to leave?";
        e.returnValue = warningMessage; // Standard for most browsers
        return warningMessage; // For some other browsers
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
