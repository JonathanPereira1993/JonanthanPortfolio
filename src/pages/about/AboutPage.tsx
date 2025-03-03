import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarItem from "../../components/sidebar/SidebarItem";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";

import "./AboutPage.scss";
import ContentLayout from "../../components/contentLayout/ContentLayout";

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
      {itemSelected === 1 && <ContentLayout title="_bio">Bio</ContentLayout>}
      {itemSelected === 2 && (
        <ContentLayout title="_interests">Interests</ContentLayout>
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
