import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";

import numeros from "../assets/images/numeros.png";
const ArregloImagenes = [img1, img2, img3, img4, img5, img6];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

// www.npmjs.com/package/react-multi-carousel

export const SectionToday = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <p className=" text-red-500 border-l-8 border-red-500 text-xl ml-10 rounded pl-2">Today’s</p>
            <div className="w-full flex  items-center gap-16 mt-3">
                <p className="text-black font-semibold text-4xl ml-10">Flash Sales</p>

                <img src={numeros} alt="numeros" className="w-60" />
            </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                //activar flechas o quitarlas
                arrows={true}
                removeArrowOnDeviceType={["tablet"]}
                // centerMode={true}
                rewind={true}
                rewindWithAnimation={true}
                focusOnSelect={true}
                className="max-w-7xl mx-auto max-h-64 mt-10 ml-16  flex gap-4 cursor-pointer"
            >
                {ArregloImagenes.map((imagen, index) => (
                    <div key={index} className="mx-2 w-56 h-full px-1">
                        <div className="bg-slate-200/50 p-3  ">
                            <span className=" py-1.5 px-3 text-xs rounded font-normal bg-red-500 text-white">-40%</span>
                            <img src={imagen} className=" w-36 h-36 lg:w-20 lg:h-40 object-contain mx-auto" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
