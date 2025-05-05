import { createContext } from "react";

export interface ContactContextProps {
  isEmailSent: boolean;
  isShowMessage: boolean;
  isFormError: boolean;
  setShowMessage: () => void;
  setEmailSent: () => void;
  setFormError: () => void;
}

export const ContactContext = createContext<ContactContextProps | undefined>(
  undefined
);
