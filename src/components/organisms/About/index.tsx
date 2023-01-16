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
                <h1>{t("About TMLOG")}</h1>
                <p>
                    {t(
                        "With operations starting in 2020 under the management of an experienced team with agency expertise, we offer our clients excellence in every project, delivering viability, security, and technology. The relationship and connection between team and client is our priority, occurring in a humanized and personalized way."
                    )}
                </p>
                <p>
                    {t(
                        "We manage all the shipments in a coordinated and efficient way, from end to end, guaranteeing that the projects we are implementing had an agile and effective process, assuring help and support every step."
                    )}
                </p>
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
