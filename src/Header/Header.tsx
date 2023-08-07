import React from "react";
import { Nav } from "./Navbar/Nav";

import imagen1 from "../assets/Frame 560.png";
import Carousel from "./Carrousel/Carousel";

const slider = [imagen1, imagen1, imagen1];

export const Header: React.FC = (): JSX.Element => {
    return (
        <>
            <Nav />
            {/* <img src={imagen1} alt="" /> */}
            <div className="max-w-lg">
                <Carousel autoSlide={true} autoslideInterval={5000}>
                    {slider.map((s, i) => {
                        return <img src={s} alt="imagen" key={i} />;
                    })}
                </Carousel>
            </div>
        </>
    );
};
