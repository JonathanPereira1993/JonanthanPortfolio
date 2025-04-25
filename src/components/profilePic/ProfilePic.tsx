import Photo from "../../assets/me/MySelf.jpeg";

import "./ProfilePic.scss";

const ProfilePic = () => {
  return (
    <div className="profile-picture">
      <img src={Photo} alt="Jonathan's photo" />
    </div>
  );
};

export default ProfilePic;
