const HeadingPrimary = (prop) => {
    return (

        <p className={`text-5xl font-bold text-primary ${prop.className}`}>
            {prop.children}
        </p>
    );
}

export default HeadingPrimary;