import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
  Preview,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Preview>_New Contact Form Portfolio</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section>
            <Text style={titleStyle}>New Contact Form Submission</Text>
            <Text style={labelStyle}>
              <strong>_name:</strong> {name}
            </Text>
            <Text style={labelStyle}>
              <strong>_email:</strong> {email}
            </Text>
            <Text style={labelStyle}>
              <strong>_message:</strong> {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// 🎨 Email Styling
const bodyStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#020618",
  padding: "20px",
};

const containerStyle = {
  maxWidth: "600px",
  backgroundColor: "#0f172b",
  color: "#f1f5f9",
  borderWidth: 1,
  borderColor: "#314158",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fff",
  marginBottom: "10px",
};

const labelStyle = {
  fontSize: "16px",
  color: "#90a1b9",
  lineHeight: "1.5",
};

export default ContactEmail;
