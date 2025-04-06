import CertificationItem from "../../../../components/certificationItem/CertificationItem";
import ContentLayout from "../../../../components/contentLayout/ContentLayout";
import StaggeredListAnimation from "../../../../components/StaggeredListAnimation/StaggeredListAnimation";

import { certifications } from "../../../../constants/Constants";

import "./CertificationsSection.scss";

const CertificationsSection = () => {
  return (
    <ContentLayout
      title="_certifications"
      subtitle="// Always striving to learn more and level up my skills."
    >
      <StaggeredListAnimation className="columns columns-certifications">
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
  );
};

export default CertificationsSection;
