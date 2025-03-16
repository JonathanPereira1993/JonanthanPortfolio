import { ChangeEvent } from "react";

import "./ContactForm.scss";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

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
};

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  setFormData,
  errors,
  onSubmit,
  submitting,
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div>
        <Input
          label="_name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div>
        <Input
          label="_email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div>
        <Input
          label="_message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>

      <Button type="primary">
        {submitting ? <span className="loader"></span> : "submit-message"}
      </Button>
    </form>
  );
};

export default ContactForm;
