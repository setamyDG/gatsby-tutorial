import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import media from "../utils/media";
import Footer from "../components/footer";

const ContactContent = styled.div`
  height: 60vh;
  width: 100vw;
  z-index: 1;
  margin-top: 25rem;
`;

const StyledTitle = styled.h1`
  font-family: "Russo One";
  color: #e43f5a;;
  text-transform: uppercase;
  margin-top: 100px;
  ${media.tablet`
  margin-top: 40px;
  margin-bottom: 55px;
  `}
  ${media.mobile`
  font-size: 30px;
  `}

`;
const StyledSubtitle = styled.p`
  font-size: 20px;
  color: #e43f5a;;
  font-family: "Russo One";
  ${media.tablet`
  margin-top: -35px;
  font-size: 18px;
  `}
  ${media.mobile`
  font-size: 18px;
  `}
`;

const StyledDescription = styled.p`
  font-size: 15px;
  color: #e43f5a;
  font-family: "Russo One";
  ${media.tablet`
  font-size: 18px;
  `}
  ${media.mobile`
  font-size: 18px;
  `}
`;

export default function Contact() {
  return (
    <Layout>
      <ContactContent>
        <StyledTitle>contact page</StyledTitle>
        <StyledSubtitle>send me a message via Slack or Email =)</StyledSubtitle>
        <StyledDescription>setamy.dg@gmail.com / daniel.gola@codetain.com</StyledDescription>
      </ContactContent>
      <Footer footerText="NOTHING MORE TO SHOW HERE " />
    </Layout>
  );
}
