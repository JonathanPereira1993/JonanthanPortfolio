import "./HeroIntro.scss";

type Props = {
  introText?: string;
  title: string;
  subtitle?: string;
};

const HeroIntro = ({ introText, title, subtitle }: Props) => {
  return (
    <div className="hero-intro-container">
      <p className="hero-intro-container__intro">{introText}</p>
      <h1 className="hero-intro-container__title">{title}</h1>
      <p className="hero-intro-container__subtitle">{subtitle}</p>
    </div>
  );
};

export default HeroIntro;
