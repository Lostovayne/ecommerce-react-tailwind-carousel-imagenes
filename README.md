# Ecommerce React Tailwind

## Carousel

```javascript
import React, { useEffect, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

type CarouselProps = {
    children: React.ReactNode[],
    autoSlide?: boolean,
    autoslideInterval?: number,
};

type CarouselFC = React.FC<CarouselProps>;

const Carousel: CarouselFC = ({ children: slider, autoSlide = false, autoslideInterval = 5000 }: CarouselProps) => {
    const [curr, setCurr] = useState < number > 0;

    const prev = () => setCurr((curr) => (curr === 0 ? slider.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slider.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoslideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoslideInterval]);

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slider}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-[.3rem] pr-1.5 rounded-full shadow bg-white/80 hover:bg-white/70 text-gray-900 cursor-pointer"
                >
                    <IoChevronBackSharp size={20} />
                </button>
                <button
                    onClick={next}
                    className="p-[.3rem] pl-1.5  rounded-full shadow bg-white/80 hover:bg-white/70 text-gray-900 cursor-pointer"
                >
                    <IoChevronForwardSharp size={20} />
                </button>
            </div>

            <div className="absolute right-0 bottom-4 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slider.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`transition-all w-2 h-2 bg-white rounded-full ${
                                curr === i ? "p-1" : "bg-opacity-50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
```

## Ejecucion del Carousel

```javascript
<Carousel autoSlide={true} autoslideInterval={5000}>
    {slider.map((s, i) => {
        return <img src={s} alt="imagen" key={i} />;
    })}
</Carousel>
```

slider es un arreglo de imagenes que se pasa al Carousel para que este las pueda mapear de manera correcta , el Carousel acepta propiedades tales como
`autoSlide` o `autoslideInterval` para generar con esto un Autoplay y un intervalo de velocidad con el que avanza .
