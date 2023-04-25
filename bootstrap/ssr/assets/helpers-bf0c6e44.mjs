let dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
  // hour: "numeric",
  // minute: "numeric",
  // second: "numeric",
};
function formatDateTimeShort(string) {
  const date = string ? new Date(string) : void 0;
  return (date == null ? void 0 : date.toLocaleDateString("en-GH", dateOptions)) || "";
}
function getDateTimeShort() {
  return formatDateTimeShort(new Date().toJSON());
}
export {
  formatDateTimeShort as f,
  getDateTimeShort as g
};
