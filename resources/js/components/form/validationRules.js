export const testAlpha = (value) => {
  return /^[A-Za-z]+$/.test(value);
};
export const testAlphaNumeric = (value) => {
  return /^[0-9A-Za-z+]+$/.test(value);
};
export const testString = (value) => {
  if (typeof value === "string") {
    return true;
  }
  return /^[0-9A-Za-z-_ ]+$/.test(value);
};
export const testAlphaDash = (value) => {
  return /^[0-9A-Za-z-_]+$/.test(value);
};
export const testNumeric = (value) => {
  return /^[0-9]+$/.test(value);
};
export const testFloat = (value) => {
  return /^[0-9.]+$/.test(value);
};
export const testBool = (value) => {
  if (typeof value === "boolean") {
    return true;
  }
};
export const testGhanaCard = (value) => {
  return /^GHA-\d{9}-\d{1}$/.test(value);
};
export const testDigitalAddress = (value) => {
  return /^[A-Z]{2}-\d{1,4}-\d{4}$/.test(value);
};
export const testVehicleRegistration = (value) => {
  return /^[A-Z]{2}\s\d{1,4}(\s[A-Z]{1}$|\s-\s\d{2}$)/.test(value);
};
export const testEmail = (value) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(value).toLowerCase()
  );
};
export const testPhone = (value) => {
  return /^0\d{9}$/.test(value);
};
export const testFile = (value) => {
  return value instanceof File || value instanceof FileList;
};
