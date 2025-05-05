import { ContactContext } from "./ContactContext";
import { useContext } from "react";

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactContextProvider");
  }
  return context;
};
