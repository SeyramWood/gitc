import React from "react";

const CarouselItem = ({ src, heading, paragraph, buttons, status }) => {
    const styles = {
        animation: "growOut 18s ease-out infinite backwards",
        backgroundImage: `linear-gradient(to bottom, rgba(17, 17, 17, 0.074),rgba(17, 17, 17, 0.074),rgba(17, 17, 17, 0.074),rgba(17, 17, 17, 0.074),rgba(17, 17, 17, 0.074)), url(${src})`,
    };

    return (
        <div className={`carousel__container__item ${status}`}>
            <div className="carousel__container__item__wrapper">
                <div
                    className="carousel__container__item__wrapper__image"
                    style={styles}
                ></div>
                <div className="carousel__container__item__wrapper__content w-[85%] mt-[5rem]">
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
                            className={`text-xl text-white ${
                                status === "active"
                                    ? "animate__animated animate__fadeInUp animate__delay-1s"
                                    : ""
                            }`}
                        >
                            {paragraph}
                        </p>
                    </div>
                    <section className="w-[100%]  mt-12 banner__buttons">
                        {buttons.map((btn, index) => (
                            <React.Fragment key={index.toString()}>
                                {btn}
                            </React.Fragment>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
