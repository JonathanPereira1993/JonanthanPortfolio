import Photo from "../../assets/me/BWPhoto.jpg";

const ProfilePic = () => {
  return (
    <div className="profile-picture">
      <img src={Photo} alt="Jonathan's photo" />
    </div>
  );
};

export default ProfilePic;
