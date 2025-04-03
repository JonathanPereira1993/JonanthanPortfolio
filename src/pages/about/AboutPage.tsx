import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarItem from "../../components/sidebar/SidebarItem";
import { useLocation, useNavigate } from "react-router";

import "./AboutPage.scss";
import Accordion from "../../components/accordion/Accordion";
import Button from "../../components/UI/button/Button";
import BioSection from "./sections/bioSection/BioSection";
import EducationSection from "./sections/educationSection/EducationSection";
import CertificationsSection from "./sections/certificationsSection/CertificationsSection";
import BooksSection from "./sections/booksSection/BooksSection";
import HobbiesSection from "./sections/hobbiesSection/HobbiesSection";

import { sidebarItems, sidebarItemsInterests } from "../../constants/Constants";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [itemSelected, setItemSelected] = useState<number>(1);

  const onItemClickHandler = (id: number, sectionName: string) => {
    setItemSelected(id);
    navigate(`/about?section=${sectionName}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (!section) {
      navigate("/about?section=bio", { replace: true });
      setItemSelected(1);
      return;
    }

    if (section === "bio") setItemSelected(1);
    if (section === "education") setItemSelected(2);
    if (section === "certifications") setItemSelected(3);
    if (section === "books") setItemSelected(4);
    if (section === "hobbies") setItemSelected(5);
  }, [location, navigate]);

  return (
    <section className="about-section">
      <Sidebar
        open={true}
        bottomAction={
          <Button type="ghost" size="small">
            Download CV
          </Button>
        }
      >
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.id}
            id={item.id}
            sectionName={item.field}
            onClick={() => onItemClickHandler(item.id, item.field)}
            selected={itemSelected === item.id ? true : false}
          >
            {item.field}
          </SidebarItem>
        ))}
        <Accordion isExpanded headerText="Interests">
          {sidebarItemsInterests.map((interestItem) => (
            <SidebarItem
              key={interestItem.id}
              id={interestItem.id}
              sectionName={interestItem.field}
              onClick={() =>
                onItemClickHandler(interestItem.id, interestItem.field)
              }
              selected={itemSelected === interestItem.id ? true : false}
            >
              {interestItem.field}
            </SidebarItem>
          ))}
        </Accordion>
      </Sidebar>{" "}
      {itemSelected === 1 && <BioSection />}
      {itemSelected === 2 && <EducationSection />}
      {itemSelected === 3 && <CertificationsSection />}
      {itemSelected === 4 && <BooksSection />}
      {itemSelected === 5 && <HobbiesSection />}
    </section>
  );
};

export default AboutPage;
