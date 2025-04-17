import { ChangeEvent } from "react";

import "./ContactForm.scss";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  formData: FormData;
  setFormData: (data: FormData) => void;
  errors: { [key: string]: string };
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
  submitted: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  setFormData,
  errors,
  onSubmit,
  submitting,
  submitted = false,
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="relative">
        <Input
          label="_name"
          placeholder="Your name"
          valid={!errors.name}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div className="relative">
        <Input
          label="_email"
          valid={!errors.email}
          placeholder="Your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="relative">
        <Input
          as="textarea"
          rows={5}
          label="_message"
          valid={!errors.message}
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>

      <Button type="primary" size="big">
        {!submitted ? (
          submitting ? (
            <span className="loader"></span>
          ) : (
            "submit-message"
          )
        ) : (
          "message-sent"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
