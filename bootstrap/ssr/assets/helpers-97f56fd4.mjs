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
  return (date == null ? void 0 : date.toLocaleDateString("en-US", dateOptions)) || "";
}
function formatDateShort(string) {
  const date = string ? new Date(string) : void 0;
  delete dateOptions.weekday;
  return (date == null ? void 0 : date.toLocaleDateString("en-US", dateOptions)) || "";
}
function getDateTimeShort() {
  return formatDateTimeShort(new Date().toJSON());
}
export {
  formatDateShort as a,
  formatDateTimeShort as f,
  getDateTimeShort as g
};
