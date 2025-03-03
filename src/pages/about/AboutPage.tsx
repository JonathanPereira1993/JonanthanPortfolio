import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarItem from "../../components/sidebar/SidebarItem";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";

import "./AboutPage.scss";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import Button from "../../components/UI/button/Button";

const sidebarItems = [
  {
    id: 1,
    field: "bio",
    selected: true,
  },
  {
    id: 2,
    field: "interests",
    selected: false,
  },
  {
    id: 3,
    field: "education",
    selected: false,
  },
];

const AboutPage = () => {
  const [itemSelected, setItemSelected] = useState<number>(1);

  const onItemClickHandler = (id: number) => {
    setItemSelected(id);
  };

  return (
    <section className="about-section">
      <Sidebar open={true}>
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.id}
            id={item.id}
            onClick={onItemClickHandler}
            selected={itemSelected === item.id ? true : false}
          >
            {item.field}
          </SidebarItem>
        ))}
      </Sidebar>{" "}
      {itemSelected === 1 && (
        <ContentLayout title="_bio">
          <CodeSnippet
            formattedDescription="I’m Jonathan, an autodidact front-end developer based in Portugal 🇵🇹.

With over two years of experience in a tech company, I started my journey working with Outsystems (a low-code platform), collaborating with UX/UI teams. Beyond that, I write JavaScript, style with CSS/SCSS, and continuously expand my skills by exploring new technologies. Currently, I’m building personal projects with ReactJS and TailwindCSS, constantly challenging myself to grow as a developer.

Before diving into web development, I studied Web Development & Multimedia, followed by a Games & Multimedia bachelor’s degree. This academic background introduced me to design, programming, and digital media, equipping me with the skills to navigate the corporate world and take on real-world projects."
            showLineNumbers={true}
          />
        </ContentLayout>
      )}
      {itemSelected === 2 && (
        <ContentLayout title="_interests">
          <Button type="primary">I´m a button</Button>
          <Button type="default">I´m a button</Button>
          <Button type="ghost">I´m a button</Button>
          <Button type="success">I´m a button</Button>
          <Button type="error">I´m a button</Button>
          <Button type="warning">I´m a button</Button>
          <Button type="disabled">I´m a button</Button>
          <Button type="link">I´m a button</Button>
        </ContentLayout>
      )}
      {itemSelected === 3 && (
        <ContentLayout title="_education">
          <CodeSnippet
            title="IPLeiria"
            username="jonathanpereira1993"
            date="11/12/2020"
            description="Teste de email e de texto etc etc"
          />
          <CodeSnippet
            title="IPLeiria"
            username="jonathanpereira1993"
            date="11/12/2020"
            description="Teste de email e de texto etc etc"
          />
          <CodeSnippet
            title="IPLeiria"
            username="jonathanpereira1993"
            date="11/12/2020"
            description="Teste de email e de texto etc etc"
          />
        </ContentLayout>
      )}
    </section>
  );
};

export default AboutPage;
