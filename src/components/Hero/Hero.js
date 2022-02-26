import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, SocialContainer, SocialIcons } from "./HeroStyles";

const Hero = () => (
  <>
    <Section id="hero" row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hallo!
        </SectionTitle>

        <SocialContainer>
          <SocialIcons href="https://github.com/shanedle" target="_blank">
            <FaGithub size="28px" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/shane-anh-dagatan-le/"
            target="_blank"
          >
            <FaLinkedin size="28px" />
          </SocialIcons>
          <SocialIcons href="mailto:shane.anh.d.le@gmail.com">
            <FaEnvelope size="28px" />
          </SocialIcons>
        </SocialContainer>

        <SectionText>
          I’m Shane, a Front End Developer and a cat lover based in a small town
          in Norway.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
