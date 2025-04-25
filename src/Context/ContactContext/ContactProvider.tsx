import { useState, ReactNode } from "react";
import { ContactContext } from "./ContactContext";

export const ContactContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isFormError, setIsFormError] = useState<boolean>(false);

  const closeSuccessMessage = () => setIsEmailSent(false);

  const setEmailSent = () => setIsEmailSent(true);

  const setFormError = () => setIsFormError((prev) => !prev);

  return (
    <ContactContext.Provider
      value={{
        isEmailSent,
        isFormError,
        setEmailSent,
        setFormError,
        closeSuccessMessage,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
