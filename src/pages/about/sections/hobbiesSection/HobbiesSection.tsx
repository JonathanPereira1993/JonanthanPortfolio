import ContentLayout from "../../../../components/contentLayout/ContentLayout";
import HobbieItem from "../../../../components/hobbieItem/HobbieItem";
import StaggeredListAnimation from "../../../../components/StaggeredListAnimation/StaggeredListAnimation";

import { hobbies } from "../../../../constants/Constants";

import "./HobbiesSection.scss";

const HobbiesSection = () => {
  return (
    <ContentLayout
      title="_hobbies"
      subtitle="// I’ve always been a curious mind, constantly exploring new
            interests and diving into different passions. Whether it’s music,
            aviation, technology, or anything that sparks my curiosity, I love
            the thrill of learning and discovering something new. Here are some
            of the things that keep me inspired!"
    >
      <StaggeredListAnimation className="columns columns-hobbies">
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
      </StaggeredListAnimation>
    </ContentLayout>
  );
};

export default HobbiesSection;
