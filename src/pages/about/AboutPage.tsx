import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarItem from "../../components/sidebar/SidebarItem";

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
      </Sidebar>
    </section>
  );
};

export default AboutPage;
