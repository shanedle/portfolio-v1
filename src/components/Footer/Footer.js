import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrapper,
  CopyrightContainer,
  CopyrightText,
  SocialContainer,
  SocialIcons,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <CopyrightContainer>
          <CopyrightText>
            &copy; {new Date().getFullYear()}, coded and designed by Shane Le
          </CopyrightText>
        </CopyrightContainer>
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
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
