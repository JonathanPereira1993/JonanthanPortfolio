import "./ContactsPage.scss";
import GridContainer from "../../components/gridContainer/GridContainer";
import ContactForm from "../../components/contactForm/ContactForm";

const ContactsPage = () => {
  return (
    <section className="contacts-section">
      <GridContainer columns="2" gap="var(--space-3xl)">
        <div>
          <ContactForm />
        </div>
        <div>ShowCase</div>
      </GridContainer>
    </section>
  );
};

export default ContactsPage;
