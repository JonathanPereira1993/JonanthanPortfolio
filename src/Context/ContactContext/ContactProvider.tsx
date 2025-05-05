import { useState, ReactNode } from "react";
import { ContactContext } from "./ContactContext";

export const ContactContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isFormError, setIsFormError] = useState<boolean>(false);
  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);

  const setEmailSent = () => setIsEmailSent((prev) => !prev);

  const setFormError = () => setIsFormError((prev) => !prev);

  const setShowMessage = () => setIsShowMessage((prev) => !prev);

  return (
    <ContactContext.Provider
      value={{
        isEmailSent,
        isFormError,
        isShowMessage,
        setEmailSent,
        setFormError,
        setShowMessage,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
