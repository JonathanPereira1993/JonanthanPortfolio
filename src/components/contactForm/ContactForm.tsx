import "./ContactForm.scss";
import Input from "../UI/input/Input";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <Input label="_name" />
      <Input label="_email" />
      <Input label="_message" />
    </form>
  );
};

export default ContactForm;
