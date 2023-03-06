let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
};

export function formatDateTimeShort(string) {
    const date = string ? new Date(string) : undefined;
    return date?.toLocaleDateString("en-GH", dateOptions) || "";
}
export function getDateTimeShort() {
    return formatDateTimeShort(new Date().toJSON());
}
