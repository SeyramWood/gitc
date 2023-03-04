import React from "react";
import "../../../css/footer.scss";

function FooterCarousel({ images = [], duration = 1000, axis }) {
    const [index, setIndex] = React.useState(0);
    const length = images.length;

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
        }, duration);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="footer__carousel">
            {images.map((image, i) => (
                <div
                    className={`footer__carousel__item`}
                    style={{
                        display: axis === "y" ? "block" : "inline-block",
                        transform:
                            axis === "y"
                                ? `translate3d(0, ${-index * 100}%, 0)`
                                : `translate3d(${-index * 100}%, 0, 0)`,
                    }}
                >
                    <img src={image} alt="tile" srcSet="" />
                </div>
            ))}
        </div>
    );
}

export default FooterCarousel;
