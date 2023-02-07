import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";

import { onWheel } from "./functions/onWheel";
import { useDrag } from "./hooks/useDrag";

import * as S from "./styles";

import IconDeal from "../../../assets/icon-deal.jpg";
import IconTruck from "../../../assets/icon-truck.jpg";
import IconBusiness from "../../../assets/icon-business.jpg";
import IconPeople from "../../../assets/icon-people.jpg";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

// NOTE: embrace power of CSS flexbox!

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: getId(ind) }));

export const About = () => {
    const [items] = useState(getItems);

    const { t } = useTranslation();

    // NOTE: for drag by mouse
    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const handleDrag =
        ({ scrollContainer }: scrollVisibilityApiType) =>
        (ev: React.MouseEvent) =>
            dragMove(ev, (posDiff) => {
                if (scrollContainer.current) {
                    scrollContainer.current.scrollLeft += posDiff;
                }
            });

    const [selected, setSelected] = React.useState<string>("");
    const handleItemClick = (itemId: string) => () => {
        if (dragging) {
            return false;
        }
        setSelected(selected !== itemId ? itemId : "");
    };

    const data = [
        {
            icon: IconDeal,
            title: "320",
            desc: `${t("Projects done")}`
        },
        {
            icon: IconTruck,
            title: "153",
            desc: `${t("Owned partners")}`
        },
        {
            icon: IconBusiness,
            title: "72",
            desc: `${t("Clients worldwide")}`
        },
        {
            icon: IconPeople,
            title: "114",
            desc: `${t("People in team")}`
        }
    ];

    return (
        <S.Container>
            <S.Wrapper>
                <div>
                    <h1>{t("About TMLOG")}</h1>
                    <p>
                        {t(
                            "TMLOG is a dynamic and growing international logistics company that was founded in 2020. Despite its recent inception, TMLOG has quickly established itself as a leader in the industry, offering top-quality logistics solutions to businesses of all sizes."
                        )}
                    </p>
                    <p>
                        {t(
                            "From the beginning, TMLOG was focused on providing its customers with the best possible shipping experience. The company's founders recognized the need for a logistics provider that could offer flexible, efficient and cost-effective services that met the unique needs of each business. To achieve this, TMLOG invested in the latest technology and infrastructure, ensuring that it had the tools and resources it needed to succeed."
                        )}
                    </p>
                </div>
                <div>
                    <p>
                        {t(
                            "Since its founding, TMLOG has experienced rapid growth and has become one of the most trusted and respected international logistics companies in the industry. The company offers a full suite of logistics services, including air freight, sea freight, road freight, and chain solutions, as well as cargo insurance to protect customers' valuable goods during transit."
                        )}
                    </p>
                    <p>
                        {t(
                            "At TMLOG, the company's focus is always on providing the highest level of customer service and satisfaction. The company's team of experts works closely with each client to understand their specific needs and goals, and develops customized logistics solutions to meet their unique requirements. With its commitment to excellence, TMLOG is well on its way to becoming a leader in the international logistics industry for years to come."
                        )}
                    </p>
                </div>
            </S.Wrapper>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                onWheel={onWheel}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
            >
                {data.map(({ icon, title, desc }: any) => (
                    <Card
                        icon={icon}
                        title={title}
                        desc={desc}
                        itemId={title} // NOTE: itemId is required for track items
                        key={title}
                        onClick={handleItemClick(title)}
                        selected={title === selected}
                        link={""}
                    />
                ))}
            </ScrollMenu>
        </S.Container>
    );
};
