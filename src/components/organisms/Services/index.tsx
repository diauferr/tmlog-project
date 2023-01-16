import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

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

const data = [
    {
        icon: IconPlane,
        title: "Air freight",
        desc: "Our AIRFAST services have been designed for customers who need their goods delivered urgently.",
        link: "Read more"
    },
    {
        icon: IconShip,
        title: "Sea freight",
        desc: "Sea-Air cargo is the last to be loaded and the first to be unloaded, reducing transshipment times and risk.",
        link: "Read more"
    },
    {
        icon: IconTruck,
        title: "Road Freight",
        desc: "Safety assured for your business, this means that our trucks transport have the best delivery time.",
        link: "Read more"
    },
    {
        icon: IconTask,
        title: "Chain Solutions",
        desc: "Experienced professionals trained to manage, transport, store, and ship your cargo efficiently.",
        link: "Read more"
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
        title: "Cargo insurance",
        desc: "Full assistence for all the process of choosing the best shipping insurance for your business.",
        link: "Read more"
    }
];

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

    return (
        <S.Container onMouseLeave={dragStop}>
            <S.Wrapper>
                <h1>Our Services</h1>
                <p>
                    Globally known for our ability to handle every last detail
                    of our customers’ particular logistics and forwarding needs,
                    TMLOG’s team takes care of all your logistics.
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
