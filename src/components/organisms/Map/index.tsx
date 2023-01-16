import React from "react";

import * as S from "./styles";

export const Map = () => {
    return (
        <S.Container>
            <iframe
                width="100%"
                height="200"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=TMLOG%20international%20Logistics+(TMLOG%20-%20International%20Logistics)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                    measure acres/hectares on map
                </a>
            </iframe>
        </S.Container>
    );
};
