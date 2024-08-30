import { UserSessionContext } from "@/providers/UserProvider";
import { useContext } from "react";

const useUserSession = () => {
  const context = useContext(UserSessionContext);

  if (!context) {
    throw new Error("Expected to be wrapped in a UserSessionProvider");
  }

  return context;
};

export default useUserSession;
