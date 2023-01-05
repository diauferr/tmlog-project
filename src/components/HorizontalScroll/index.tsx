import React from "react";

import * as S from "./styles";

export const HorizontalScroll = () => {
  return (
    <div>
      <S.Container>
        <ul className="hs full no-scrollbar">
          <li className="item">1</li>
          <li className="item">2</li>
          <li className="item">3</li>
          <li className="item">4</li>
          <li className="item">5</li>
          <li className="item">6</li>
          <li className="item">7</li>
          <li className="item">8</li>
          <li className="item">9</li>
          <li className="item">10</li>
        </ul>
      </S.Container>
    </div>
  );
};
