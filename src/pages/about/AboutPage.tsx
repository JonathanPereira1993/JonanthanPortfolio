import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import { useLocation, useNavigate } from "react-router";
import useScreenSize from "../../hooks/useScreenSize";

import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/UI/Button/Button";
import BioSection from "./sections/bioSection/BioSection";
import EducationSection from "./sections/educationSection/EducationSection";
import CertificationsSection from "./sections/certificationsSection/CertificationsSection";
import BooksSection from "./sections/booksSection/BooksSection";
import HobbiesSection from "./sections/hobbiesSection/HobbiesSection";

import "./AboutPage.scss";

import { portfolioNavLinks } from "../../constants/Constants";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSmallScreen = useScreenSize(1400);
  const sidebarOpen = isSmallScreen;

  const [itemSelected, setItemSelected] = useState<string>("bio");

  const onItemClickHandler = (id: string, sectionName: string) => {
    setItemSelected(id);
    navigate(`/about?section=${sectionName}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section") ?? "bio";

    setItemSelected(section);
  }, [location]);

  const renderSidebarItem = (isInterest: boolean) =>
    portfolioNavLinks.flatMap((item) =>
      item.sidebar
        .filter((filteredItem) => filteredItem.isInterests === isInterest)
        .map((item) => (
          <SidebarItem
            key={item.id}
            id={item.id}
            sectionName={item.label}
            onClick={() => onItemClickHandler(item.path, item.label)}
            selected={itemSelected === item.path}
          >
            {item.label}
          </SidebarItem>
        ))
    );

  return (
    <section className="about-section">
      <Sidebar
        open={sidebarOpen}
        bottomAction={
          <Button type="ghost" size="small">
            Download CV
          </Button>
        }
      >
        {renderSidebarItem(false)}

        <Accordion isExpanded headerText="Interests">
          {renderSidebarItem(true)}
        </Accordion>
      </Sidebar>
      {itemSelected === "bio" && <BioSection />}
      {itemSelected === "education" && <EducationSection />}
      {itemSelected === "certifications" && <CertificationsSection />}
      {itemSelected === "books" && <BooksSection />}
      {itemSelected === "hobbies" && <HobbiesSection />}
    </section>
  );
};

export default AboutPage;
