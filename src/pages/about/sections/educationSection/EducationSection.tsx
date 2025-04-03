import CodeSnippet from "../../../../components/codeSnippet/CodeSnippet";
import ContentLayout from "../../../../components/contentLayout/ContentLayout";
import FloatingTags from "../../../../components/FloatingTags/FloatingTags";
import StaggeredListAnimation from "../../../../components/StaggeredListAnimation/StaggeredListAnimation";

import { education } from "../../../../constants/Constants";

import "./EducationSection.scss";

const EducationSection = () => {
  return (
    <ContentLayout title="_education">
      <StaggeredListAnimation className="about-education">
        {education.map((item) => (
          <div key={item.id}>
            <CodeSnippet
              image={item.image}
              title={item.title}
              subtitle={item.school}
              date={item.year}
            />
            <FloatingTags size="sm" tags={item.tech} />
          </div>
        ))}
      </StaggeredListAnimation>
    </ContentLayout>
  );
};

export default EducationSection;
