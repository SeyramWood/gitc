export function Card({ label = "", children }) {
    if (label) {
        return (
            <div className="s__card">
                <h3 className="s__card__title">{label}</h3>
                {children}
            </div>
        );
    }
    return <div className="s__card">{children}</div>;
}

export function InputWrapper({ label, name, errors, children }) {
    return (
        <>
            <label className="input__wrapper">
                <p className="mb-1">{label}</p>
                {children}
            </label>
            {errors[name] && (
                <p className="text-rose-500 input__wrapper__error">
                    {errors[name]}
                </p>
            )}
        </>
    );
}
