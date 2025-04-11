import { GiPortugal, GiSwitzerland } from "react-icons/gi";
import ContentLayout from "../../../../components/ContentLayout/ContentLayout";
import FloatingTags from "../../../../components/FloatingTags/FloatingTags";

import { biography } from "../../../../constants/Constants";

import ProfilePic from "../../../../components/ProfilePic/ProfilePic";
import { LineBreak } from "../../../../utils/LineBreaks";

const BioSection = () => {
  return (
    <ContentLayout title="_bio">
      <div className="bio-structure">
        <div className="bio-structure__title">
          <h2>{biography.title}</h2>
        </div>
        <div className="bio-structure__photo">
          <ProfilePic />
        </div>
        <div className="bio-structure__story">
          <h3>A little bit about me</h3>
          <LineBreak text={biography.story} />
        </div>
        <div
          className="bio-structure__naturality"
          title="Click if you want to see on the maps"
          onClick={() =>
            window.open("https://maps.app.goo.gl/1enry4mqvNTH6My26", "_blank")
          }
        >
          <h3>Born</h3>
          <div>
            <GiSwitzerland
              title="Switzerland country"
              className="country-svg"
            />
            <p>{biography.naturality}</p>
          </div>
        </div>
        <div
          className="bio-structure__from"
          title="Click if you want to see on the maps"
          onClick={() =>
            window.open("https://maps.app.goo.gl/dnZLqikGqEpyAeKE9", "_blank")
          }
        >
          <h3>From</h3>
          <div>
            <GiPortugal title="Portugal country" className="country-svg" />
            <p>{biography.from}</p>
          </div>
        </div>
        <div
          className="bio-structure__experience"
          title="My years of experience since 2021"
        >
          <h3>Experience</h3>
          <div>
            <p>{biography.yearsExperience} years</p>
          </div>
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
  );
};

export default BioSection;
