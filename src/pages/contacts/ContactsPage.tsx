import { useState } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import ContentLayout from "../../components/ContentLayout/ContentLayout";
import EmailSentAnim from "./EmailSentAnim";

import "./ContactsPage.scss";
import Button from "../../components/UI/Button/Button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactsPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const emailSentHandler = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
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
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        emailSentHandler();
        setIsSubmitting(false);
        setErrors({});
      } else {
        setIsSubmitting(false);
        console.error("Error sending email: ", data.error);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Failed to send email. Try again later.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const normalCodeString = `const button = document.querySelector('#sendBtn');

  const message = {
    name: "${formData.name}",
    email: "${formData.email}",
    message: "${formData.message}",
    date: "${new Date().toDateString()}"
  }
  
  button.addEventListener('click', () => {
    form.send(message);
  })`;

  const successfulCodeString = `
    const response = {
      status: "success",
      message: "Email sent successfully!",
      date: "${new Date().toLocaleString()}"
    };`;

  return (
    <>
      <ContentLayout title="" verticalCenter hasSidebar={false}>
        <div className="contacts-section">
          <div>
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              onSubmit={handleSubmit}
              submitting={isSubmitting}
            />
          </div>
          <div className="syntax-break">
            <SyntaxHighlighter
              language="javascript"
              style={oneDark}
              showLineNumbers
              wrapLongLines={true}
              customStyle={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                overflowX: "hidden",
                maxWidth: "600px",
              }}
            >
              {emailSent ? successfulCodeString : normalCodeString}
            </SyntaxHighlighter>
          </div>
        </div>
        <Button
          onClick={() => {
            setEmailSent(true);
          }}
        >
          Fire animation
        </Button>
      </ContentLayout>
      <EmailSentAnim show={emailSent} />
    </>
  );
};

export default ContactsPage;
