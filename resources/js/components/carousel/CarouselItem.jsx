import React from "react";

const CarouselItem = ({ src, heading, paragraph, buttons, status }) => {
    const styles = {
        animation: "growOut 18s ease-out infinite backwards",
        backgroundImage: `linear-gradient(to bottom,
            rgba(17, 17, 17, 0.775),
            rgba(17, 17, 17, 0.775)), url(${src})`,
    };

    return (
        <div className={`carousel__container__item ${status}`}>
            <div className="carousel__container__item__wrapper">
                <div
                    className="carousel__container__item__wrapper__image"
                    style={styles}
                ></div>
                <div className="carousel__container__item__wrapper__content w-[85%] mt-[2rem]">
                    <h1
                        className={`text-8xl text-bold mb-8 ${
                            status === "active"
                                ? "animate__animated animate__fadeInRightBig animate__fast-2s"
                                : ""
                        }`}
                    >
                        {heading}
                    </h1>
                    <div className="w-[60%]">
                        <p
                            className={` text-3xl text-white font-light ${
                                status === "active"
                                    ? "animate__animated animate__fadeInUp animate__delay-1s"
                                    : ""
                            }`}
                        >
                            {paragraph}
                        </p>
                    </div>
                    <section className="w-[100%]  mt-14 banner__buttons">
                        {buttons.map((btn, index) => (
                            <button
                                className={`banner__buttons__btn banner__buttons--transparent ${
                                    status === "active"
                                        ? "animate__animated animate__fadeInUp animate__delay-2s"
                                        : ""
                                }`}
                                key={index.toString()}
                            >
                                {btn}
                            </button>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
