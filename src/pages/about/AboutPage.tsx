import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarItem from "../../components/sidebar/SidebarItem";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import { useLocation, useNavigate } from "react-router";

import { books, hobbies } from "../../constants/Constants";

import "./AboutPage.scss";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import Accordion from "../../components/accordion/Accordion";
import BookItem from "../../components/bookItem/BookItem";
import GridContainer from "../../components/gridContainer/GridContainer";
import HobbieItem from "../../components/hobbieItem/HobbieItem";

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
];

const sidebarItemsInterests = [
  {
    id: 3,
    field: "books",
    selected: true,
  },
  {
    id: 4,
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
    if (section === "books") setItemSelected(3);
    if (section === "hobbies") setItemSelected(4);
  }, [location]);

  return (
    <section className="about-section">
      <Sidebar open={true}>
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
          <CodeSnippet
            formattedDescription="Jonathan – Front-End Developer | Portugal 🇵🇹

I’m Jonathan, a self-taught front-end developer passionate about crafting modern, user-friendly web experiences. Based in Portugal, I have over three years of experience in the tech industry, where I started working with OutSystems (a low-code platform) and closely collaborating with UX/UI teams.

Beyond low-code, I write JavaScript, style with CSS/SCSS, and continuously explore new technologies to refine my craft. Currently, I’m building personal projects with ReactJS and TailwindCSS, always pushing myself to grow as a developer.

My journey into tech began with a background in Web Development & Multimedia, followed by a bachelor’s degree in Games & Multimedia. This academic foundation gave me a strong grasp of design, programming, and digital media—skills that allow me to bridge the gap between aesthetics and functionality in web development.

Creativity is at the core of everything I do. Whether it’s coding, designing, or playing the drums—one of my biggest hobbies—I love expressing myself through different forms of creation. I’m always eager to be part of projects that make a difference, collaborating with like-minded people to build meaningful and impactful experiences.

Beyond tech, I’m constantly seeking personal growth. I love reading great books that challenge my thinking, expand my knowledge, and help me become a better version of myself. For me, learning never stops—whether it’s through code, music, or the wisdom found in a good book.

Driven by curiosity and a problem-solving mindset, I thrive on learning, adapting, and pushing boundaries to create seamless digital experiences."
            showLineNumbers={true}
          />
        </ContentLayout>
      )}
      {itemSelected === 2 && (
        <ContentLayout title="_education">
          <CodeSnippet
            title="School of Technology and Management (IPL)"
            subtitle="Web development and multimedia (TeSP)"
            date="2016 - 2018"
            description="Here I learned the world of web development, starting with HTML and CSS basics to
advanced databases and JavaScript concepts."
          />
          <CodeSnippet
            title="School of Technology and Management (IPL)"
            subtitle="Bachelor in Games and Multimedia"
            date="2018 - present"
            description="I learned all about game and multimedia technologies and web development. I was
introduced to object-oriented programming working with C++, C#, Java and JavaScript."
          />
        </ContentLayout>
      )}
      {itemSelected === 3 && (
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
      {itemSelected === 4 && (
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
