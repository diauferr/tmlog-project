import React from "react";

import { HorizontalScroll } from "../../components/HorizontalScroll";

import * as S from "./styles";

export const Services = () => {
  return (
    <S.Container>
      <S.SectionTitle>Special Services</S.SectionTitle>
      <S.SectionSubTitle>
        Globally known for our ability to handle every last detail of our
        customers’ particular logistics and forwarding needs, TransCargo’s
        Special Services team takes care of all your logistics.
      </S.SectionSubTitle>
      <HorizontalScroll />
    </S.Container>
  );
};
