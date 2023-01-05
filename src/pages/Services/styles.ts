import styled from "styled-components";

import ServiceBg from "../../assets/service_bg.png";

export const Container = styled.div`
  padding-left: 175px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url(${ServiceBg});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 1024px) {
    padding-left: 0px;
    padding-top: 40px;
    padding-bottom: 100px;
  }
`;

export const SectionTitle = styled.h2`
  margin-left: 56px;
  font-family: "Poppins Bold", sans-serif;
  font-size: ${(props) => props.theme.size.h2}px;
  line-height: 36px;
  color: #333333;
`;

export const SectionSubTitle = styled.p`
  margin-left: 56px;
  padding-right: 32px;
  font-family: "Poppins Regular", sans-serif;
  font-size: ${(props) => props.theme.size.p}px;
  line-height: 26px;
  max-width: 555px;
  color: #333333;
`;
