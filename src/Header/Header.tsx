import React from "react";
import { Nav } from "./Navbar/Nav";
import imagen1 from "../assets/Frame 560.png";
import Carousel from "./Carrousel/Carousel";
import { Sidebar } from "./Sidebar/Sidebar";

const slider = [imagen1, imagen1, imagen1];

export const Header: React.FC = (): JSX.Element => {
    return (
        <>
            <Nav />
            <div className="flex max-w-7xl mx-auto gap-3 h-full flex-wrap ">
                <Sidebar />
                <div className=" max-w-2xl  lg:max-w-4xl lg:py-8 lg:px-5 ">
                    <Carousel autoSlide={true} autoslideInterval={5000}>
                        {slider.map((s, i) => {
                            return <img src={s} alt="imagen" key={i} className="w-full  object-fill" />;
                        })}
                    </Carousel>
                </div>
            </div>
        </>
    );
};
