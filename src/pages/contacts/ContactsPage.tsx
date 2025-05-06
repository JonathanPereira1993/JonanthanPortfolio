import { useState } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import ContentLayout from "../../components/ContentLayout/ContentLayout";
import EmailSentAnim from "./EmailSentAnim";

import { useContact } from "../../Context/ContactContext/UseContact";

import "./ContactsPage.scss";

type FormData = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

const ContactsPage = () => {
  const {
    isEmailSent,
    isFormError,
    isShowMessage,
    setShowMessage,
    setEmailSent,
    setFormError,
  } = useContact();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (formData.website && formData.website.trim() !== "") {
      console.warn("Spam detected. Submission blocked.");
      return false;
    }
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://form-server-8fuy.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setEmailSent();
        setIsSubmitting(false);
        setShowMessage();
        setErrors({});
      } else {
        setIsSubmitting(false);

        console.error("Error sending email: ", data.error);
      }
    } catch (error) {
      setIsSubmitting(false);
      setShowMessage();
      setFormError();
      console.error("Failed to send email. Try again later.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const normalCodeString = `
    const button = document.querySelector('#sendBtn');

    const message = {
      name: "${formData.name}",
      email: "${formData.email}",
      message: "${formData.message}",
      date: "${new Date().toDateString()}"
    }
    
    button.addEventListener('click', () => {
      form.send(message);
    })`;

  return (
    <>
      <ContentLayout title="" verticalCenter hasSidebar={false}>
        <div className="contacts-section">
          <div className="form">
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              onSubmit={handleSubmit}
              submitting={isSubmitting}
              submitted={isEmailSent}
            />
          </div>
          <div className="syntax-break">
            <SyntaxHighlighter
              language="javascript"
              style={oneDark}
              showLineNumbers
              wrapLongLines={true}
              customStyle={{
                backgroundColor: "var(--theme-backdrop-glossy-soft)",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                overflowX: "hidden",
              }}
            >
              {normalCodeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </ContentLayout>
      <EmailSentAnim show={isShowMessage} isError={isFormError} />
    </>
  );
};

export default ContactsPage;
