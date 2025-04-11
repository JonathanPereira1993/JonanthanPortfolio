import Button from "../UI/Button/Button";

import { useNavigate } from "react-router";

type Props = {
  hobbieNum: string;
  cover: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const HobbieItem = ({
  hobbieNum,
  cover,
  title,
  subtitle,
  buttonText,
  onClick,
}: Props) => {
  const navigate = useNavigate();

  const openDetailsHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
    navigate(`/about/hobbies/${hobbieNum}`);
  };
  return (
    <div className="hobbie-item">
      <img className="hobbie-item__image" src={cover} alt={title} />
      <div className="hobbie-item__content">
        <h3 className="hobbie-item__content-title">{title}</h3>
        <p className="hobbie-item__content-subtitle">{subtitle}</p>
        <Button
          title={buttonText}
          size="big"
          type="default"
          onClick={openDetailsHandler}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default HobbieItem;
