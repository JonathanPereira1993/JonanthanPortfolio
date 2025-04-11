type Props = {
  image: string;
  title: string;
  tech: string;
  link: string;
};

const CertificationItem = ({ image, title, tech, link }: Props) => {
  const handleClick = () => {
    window.open(link.toString(), "_blank");
  };

  return (
    <div
      title="Click to see the certification page"
      onClick={handleClick}
      className="certification-item"
    >
      <img className="certification-item__image" src={image} alt={title} />
      <div className="certification-item__content">
        <h2 className="certification-item__content-title">{title}</h2>
        <span className="certification-item__content-tech">{tech}</span>
      </div>
    </div>
  );
};

export default CertificationItem;
