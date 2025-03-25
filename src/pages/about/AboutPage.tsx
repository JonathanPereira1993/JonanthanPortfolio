import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarItem from "../../components/sidebar/SidebarItem";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import { useLocation, useNavigate } from "react-router";
import { LineBreak } from "../../utils/LineBreaks";
import { GiSwitzerland, GiPortugal } from "react-icons/gi";

import {
  books,
  hobbies,
  education,
  certifications,
  biography,
} from "../../constants/Constants";

import "./AboutPage.scss";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import Accordion from "../../components/accordion/Accordion";
import BookItem from "../../components/bookItem/BookItem";
import GridContainer from "../../components/gridContainer/GridContainer";
import HobbieItem from "../../components/hobbieItem/HobbieItem";
import Button from "../../components/UI/button/Button";
import StaggeredListAnimation from "../../components/StaggeredListAnimation/StaggeredListAnimation";
import CertificationItem from "../../components/certificationItem/CertificationItem";
import ProfilePic from "../../components/profilePic/ProfilePic";
import FloatingTags from "../../components/FloatingTags/FloatingTags";

const sidebarItems = [
  {
    id: 1,
    field: "bio",
    selected: true,
  },
  {
    id: 2,
    field: "education",
    selected: false,
  },
  {
    id: 3,
    field: "certifications",
    selected: false,
  },
];

const sidebarItemsInterests = [
  {
    id: 4,
    field: "books",
    selected: true,
  },
  {
    id: 5,
    field: "hobbies",
    selected: false,
  },
];

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
      {itemSelected === 1 && (
        <ContentLayout title="_bio">
          <div className="bio-structure">
            <h2 className="bio-structure__title">{biography.title}</h2>
            <ProfilePic />
            <div className="bio-structure__story">
              <h3>A little bit about me</h3>
              <LineBreak text={biography.story} />
            </div>
            <div className="bio-structure__naturality">
              <h3>Born</h3>
              <GiSwitzerland
                title="Switzerland country"
                className="country-svg"
              />
              <p>{biography.naturality}</p>
            </div>
            <div className="bio-structure__from">
              <h3>From</h3>
              <GiPortugal title="Portugal country" className="country-svg" />
              <p>{biography.from}</p>
            </div>
            <div className="bio-structure__skills">
              <h3>Skills</h3>
              <FloatingTags tags={biography.skills} />
            </div>
            <div className="bio-structure__objectives">
              <h3>Objectives</h3>
              <p>{biography.objectives}</p>
            </div>
          </div>
        </ContentLayout>
      )}
      {itemSelected === 2 && (
        <ContentLayout title="_education">
          <StaggeredListAnimation className="staggered-list">
            {education.map((item) => (
              <CodeSnippet
                key={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.school}
                date={item.year}
                description={item.description}
              />
            ))}
          </StaggeredListAnimation>
        </ContentLayout>
      )}
      {itemSelected === 3 && (
        <ContentLayout title="_certifications">
          <span>// Certifications</span>
          <StaggeredListAnimation className="columns">
            {certifications.map((item) => (
              <CertificationItem
                key={item.id}
                image={item.image}
                title={item.title}
                tech={item.tech}
                link={item.link}
              />
            ))}
          </StaggeredListAnimation>
        </ContentLayout>
      )}
      {itemSelected === 4 && (
        <ContentLayout title="_books">
          <span>
            // Let me share some of my favorite books with you! Each one has
            shaped my perspective, inspired me, and reflects a part of who I am.
          </span>
          <GridContainer columns="4" gap="40px" className="max-width-books">
            {books.map((book) => (
              <BookItem
                key={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
              />
            ))}
          </GridContainer>
        </ContentLayout>
      )}
      {itemSelected === 5 && (
        <ContentLayout title="_hobbies">
          <span>
            // I’ve always been a curious mind, constantly exploring new
            interests and diving into different passions. Whether it’s music,
            aviation, technology, or anything that sparks my curiosity, I love
            the thrill of learning and discovering something new. Here are some
            of the things that keep me inspired!
          </span>
          <GridContainer columns="3" gap="40px" className="grid-row-height">
            {hobbies.map((hobbie) => (
              <HobbieItem
                key={hobbie.id}
                hobbieNum={hobbie.id}
                cover={hobbie.cover}
                title={hobbie.title}
                subtitle={hobbie.subtitle}
                onClick={() => {}}
                buttonText={hobbie.buttonText}
              />
            ))}
          </GridContainer>
        </ContentLayout>
      )}
    </section>
  );
};

export default AboutPage;
