import Photo from "../../assets/me/MySelf.jpeg";

import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

import "./ProfilePic.scss";

const ProfilePic = () => {
  return (
    <div className="profile-picture">
      <ImagePlaceholder
        src={Photo}
        alt="Jonathan's photo"
        width={500}
        height={600}
        hash="MrG,9VIqxsWCjZyGNLoeWWaeRojtRjoft7"
      />
    </div>
  );
};

export default ProfilePic;
