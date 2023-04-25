import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import "../../../css/banner.scss";

const Carousel = ({ children }) => {
    const [index, setIndex] = React.useState(0);
    const length = children.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 12000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="carousel__container h-[inherit]">
            <>
                {React.Children.map(children, (child, i) => {
                    return React.cloneElement(child, {
                        status: i === index ? "active" : "inactive",
                    });
                })}
            </>
            <div className="carousel__container__controls">
                <button onClick={() => handlePrevious()}>
                    <SlArrowLeft className="hidden lg:block text-[2.5rem]" />
                </button>
                <button onClick={() => handleNext()}>
                    <SlArrowRight className="hidden lg:block text-[2.5rem]" />
                </button>
            </div>
            <div className="carousel__container__indicators">
                {React.Children.map(children, (child, i) => (
                    <button
                        className={i === index ? "active" : ""}
                        onClick={() => setIndex(i)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
