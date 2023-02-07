import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useTranslation } from "react-i18next";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";

import { onWheel } from "./functions/onWheel";
import { useDrag } from "./hooks/useDrag";

import * as S from "./styles";

import IconBox from "../../../assets/IconBox.png";
import IconShip from "../../../assets/IconShip.png";
import IconPlane from "../../../assets/IconPlane.png";
import IconTruck from "../../../assets/IconTruck.png";
import IconTask from "../../../assets/IconTask.png";
import IconKit from "../../../assets/IconKit.png";
import IconCar from "../../../assets/IconCar.png";
import IconAnchor from "../../../assets/IconAnchor.png";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

// NOTE: embrace power of CSS flexbox!

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: getId(ind) }));

export const Services = () => {
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
            icon: IconPlane,
            title: `${t("Air freight")}`,
            desc: `${t(
                "Accelerate your global business with our efficient air freight services. Reliable, fast and expertly managed, our air freight solutions connect you to the world. Contact us today to learn how we can take your business to new heights."
            )}`,
            link: `${t("Read more")}`
        },
        {
            icon: IconShip,
            title: `${t("Sea freight")}`,
            desc: `${t(
                "Streamline your global supply chain with our efficient sea freight services. Reliable, cost-effective and expertly managed, our sea freight solutions connect you to the world. Contact us today to learn how we can support your business growth."
            )}`,
            link: `${t("Read more")}`
        },
        {
            icon: IconTruck,
            title: `${t("Road Freight")}`,
            desc: `${t(
                "Smoothly transport goods over land with our efficient road freight services. Flexible, reliable and expertly managed, our road freight solutions connect you to the world. Contact us today to learn how we can support your business success."
            )}`,
            link: `${t("Read more")}`
        },
        {
            icon: IconTask,
            title: `${t("Chain Solutions")}`,
            desc: `${t(
                "Optimize your global supply chain with our expert supply chain solutions. Customized, comprehensive and efficient, our services provide end-to-end support for your business. Contact us today to learn how we can transform your operations and drive success."
            )}`,
            link: `${t("Read more")}`
        },
        // {
        //     icon: IconBox,
        //     title: "Warehousing",
        //     desc: "You can opt for dedicated platforms from the advantages related to shared surfaces, resources and equipment.",
        //     link: "Read more"
        // },
        // {
        //     icon: IconKit,
        //     title: "Multimodal transport",
        //     desc: "Combined rail road transport is particularly well suited to the shipping of hazardous goods since it reduces risk.",
        //     link: "Read more"
        // },
        // {
        //     icon: IconCar,
        //     title: "Car transportation",
        //     desc: "Provides a scalable and customizable solution for customers who have programs to retire outdated IT assets.",
        //     link: "Read more"
        // },
        {
            icon: IconAnchor,
            title: `${t("Cargo insurance")}`,
            desc: `${t(
                "Shield your shipments from unexpected events with our reliable cargo insurance services. Our insurance options offer peace of mind and protection for your valuable goods during transit. Trust in secure and confident international shipping with our cargo insurance."
            )}`,
            link: `${t("Read more")}`
        }
    ];

    return (
        <S.Container onMouseLeave={dragStop}>
            <S.Wrapper>
                <h1>{t("Our Services")}</h1>
                <p>
                    {t(
                        "Streamline Your Global Supply Chain with Our International Logistics Solutions. Experience seamless, reliable, and cost-effective shipping to anywhere in the world. Our team of experts ensures your goods reach their destination on time and in pristine condition. Contact us now to learn how we can help grow your business."
                    )}
                </p>
            </S.Wrapper>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
            >
                {data.map(({ icon, title, desc, link }: any) => (
                    <Card
                        icon={icon}
                        title={title}
                        desc={desc}
                        link={link}
                        itemId={title} // NOTE: itemId is required for track items
                        key={title}
                        onClick={handleItemClick(title)}
                        selected={title === selected}
                    />
                ))}
            </ScrollMenu>
        </S.Container>
    );
};
