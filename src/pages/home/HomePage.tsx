import Hero3D from "../../components/3DScene/Hero3D";
import GridContainer from "../../components/gridContainer/GridContainer";
import HeroDisplay from "../../components/heroDisplay/HeroDisplay";
import HeroIntro from "../../components/heroIntro/HeroIntro";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="home-section">
      <GridContainer columns="2" gap="var(--space-3xl)">
        <div>
          <HeroIntro
            introText="Hi there, I am"
            title="Jonathan Pereira"
            subtitle="> Front-end developer"
          />
          <div className="comments">
            <p>// find my profile on Github:</p>
          </div>

          <div className="github-link">
            <span style={{ color: "var(--color-indigo-500)" }}>const </span>
            <span style={{ color: "var(--color-teal-500)" }}>githubLink</span>
            <span> = </span>
            <a href="https://github.com/JonathanPereira1993" target="_blank">
              <span style={{ color: "var(--link-foreground)" }}>
                "https://github.com/JonathanPereira1993"
              </span>
            </a>
          </div>
        </div>
        <div>
          <HeroDisplay>
            <Hero3D />
          </HeroDisplay>
        </div>
      </GridContainer>
    </section>
  );
};

export default HomePage;
