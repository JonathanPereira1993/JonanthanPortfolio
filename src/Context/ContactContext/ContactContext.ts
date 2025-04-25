import { createContext } from "react";

export interface ContactContextProps {
  isEmailSent: boolean;
  isFormError: boolean;
  setEmailSent: () => void;
  closeSuccessMessage: () => void;
  setFormError: () => void;
}

export const ContactContext = createContext<ContactContextProps | undefined>(
  undefined
);
