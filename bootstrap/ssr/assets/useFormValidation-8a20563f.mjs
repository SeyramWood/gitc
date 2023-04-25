import React from "react";
const testAlpha = (value) => {
  return /^[A-Za-z]+$/.test(value);
};
const testAlphaNumeric = (value) => {
  return /^[0-9A-Za-z+]+$/.test(value);
};
const testString = (value) => {
  if (typeof value === "string") {
    return true;
  }
  return /^[0-9A-Za-z-_ ]+$/.test(value);
};
const testAlphaDash = (value) => {
  return /^[0-9A-Za-z-_]+$/.test(value);
};
const testNumeric = (value) => {
  return /^[0-9]+$/.test(value);
};
const testFloat = (value) => {
  return /^[0-9.]+$/.test(value);
};
const testBool = (value) => {
  if (typeof value === "boolean") {
    return true;
  }
};
const testGhanaCard = (value) => {
  return /^GHA-\d{9}-\d{1}$/.test(value);
};
const testDigitalAddress = (value) => {
  return /^[A-Z]{2}-\d{1,4}-\d{4}$/.test(value);
};
const testVehicleRegistration = (value) => {
  return /^[A-Z]{2}\s\d{1,4}(\s[A-Z]{1}$|\s-\s\d{2}$)/.test(value);
};
const testEmail = (value) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(value).toLowerCase()
  );
};
const testPhone = (value) => {
  return /^0\d{9}$/.test(value);
};
const decamelize = (str, separator) => {
  separator = typeof separator === "undefined" ? " " : separator;
  if (str.includes("_")) {
    return str.replace("_", " ");
  }
  return str.replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2").toLowerCase();
};
let errors = {};
const validateForm = (values, rules, labels) => {
  for (const ruleKey in rules) {
    for (const valueKey in values) {
      if (ruleKey === valueKey) {
        errors[`${valueKey}`] = [];
        const rulesArray = rules[ruleKey].split("|");
        rulesArray.forEach((rule) => {
          let mainRule = "";
          let mainRuleMessage = "";
          if (rule.includes(">")) {
            mainRule = rule.split(">")[0];
            mainRuleMessage = rule.split(">")[1];
          } else {
            mainRule = rule;
          }
          if (mainRule === "required" && !values[valueKey]) {
            mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
              `The ${labels ? labels[valueKey] : decamelize(valueKey)} field is required`
            );
          } else if (values[valueKey]) {
            if (mainRule === "alpha" && !testAlpha(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be alphabetic characters`
              );
            }
            if (mainRule === "alpha_num" && !testAlphaNumeric(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be alphanumeric`
              );
            }
            if (mainRule === "alpha_dash" && !testAlphaDash(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be alphanumeric with dashes or underscore`
              );
            }
            if (mainRule === "string" && !testString(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be string`
              );
            }
            if (mainRule === "numeric" && !testNumeric(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be numeric`
              );
            }
            if (mainRule === "float" && !testFloat(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be numeric`
              );
            }
            if (mainRule === "vehicleReg" && !testVehicleRegistration(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be vehicle registration number`
              );
            }
            if (mainRule === "email" && !testEmail(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be a valid email`
              );
            }
            if (mainRule === "bool" && !testBool(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be a boolean`
              );
            }
            if (mainRule === "id_card" && !testGhanaCard(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ID field must be a valid Ghana Card`
              );
            }
            if (mainRule === "digital_address" && !testDigitalAddress(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The address field must be a valid digital address`
              );
            }
            if (mainRule === "email_phone") {
              const emailStart = /^[A-Za-z]+$/;
              const phoneStart = /^0\d{9}$/;
              if (emailStart.test(values[valueKey]) || values[valueKey].includes("@")) {
                if (!testEmail(values[valueKey])) {
                  mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                    `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be a valid email`
                  );
                }
              } else {
                if (phoneStart.test(values[valueKey])) {
                  if (!phoneStart.test(values[valueKey])) {
                    mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                      `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be a valid phone number`
                    );
                  }
                } else {
                  mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                    `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be a valid phone number`
                  );
                }
              }
            }
            if (mainRule === "phone" && !testPhone(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                `The ${labels ? labels[valueKey] : decamelize(valueKey)} field must be a valid phone number`
              );
            }
            if (mainRule.includes(":")) {
              const key = mainRule.split(":")[0];
              const value = mainRule.split(":")[1];
              switch (key.toLowerCase()) {
                case "min":
                  if (values[valueKey].length < parseInt(value)) {
                    mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                      `The ${labels ? labels[valueKey] : decamelize(valueKey)} must be ${value} characters minimum`
                    );
                  }
                  break;
                case "max":
                  if (values[valueKey].length > parseInt(value)) {
                    mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                      `The ${labels ? labels[valueKey] : decamelize(valueKey)} must be ${value} characters maximum`
                    );
                  }
                  break;
                case "match":
                  if (values[valueKey] !== values[value]) {
                    mainRuleMessage.length > 0 ? errors[`${valueKey}`].push(mainRuleMessage) : errors[`${valueKey}`].push(
                      `The ${labels ? labels[valueKey] : decamelize(valueKey)} dose not match ${value}`
                    );
                  }
                  break;
              }
            }
          }
        });
      }
    }
  }
  return errors;
};
function useFormValidation(initialState, validationRules, callBack = null) {
  const [state, setState] = React.useState(initialState);
  const [rules, setRules] = React.useState(validationRules);
  const [labels, setLabels] = React.useState();
  const [errors2, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const submitting = React.useCallback(() => {
    if (isSubmitting) {
      let noErrors = 0;
      Object.keys(state).forEach((key) => {
        noErrors += errors2[key].length;
      });
      if (noErrors === 0) {
        callBack && callBack();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting]);
  React.useEffect(() => {
    submitting();
  }, [isSubmitting]);
  const handleChange = (e, field) => {
    if (field) {
      setState((state2) => ({
        ...state2,
        [field]: e.htmlValue
      }));
      return;
    }
    const { name, value, files, type, checked } = e.target;
    if (type === "file") {
      if (files) {
        setState((state2) => ({
          ...state2,
          [name]: Object.values(files)
        }));
      }
    } else if (type === "tel") {
      let cleaned = value.replace(/\D/g, "");
      let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        setState(() => ({
          ...state,
          [name]: `(${match[1]}) ${match[2]} - ${match[3]}`
        }));
      } else {
        setState({
          ...state,
          [name]: value
        });
      }
    } else if (type === "checkbox") {
      setState({ ...state, [name]: checked });
    } else {
      setState({ ...state, [name]: value });
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateForm(state, { [name]: rules[`${name}`] }, labels);
    (() => {
      setErrors((error) => ({ ...error, ...err }));
    })();
  };
  const handleKeyDown = (e) => {
    const { name, value } = e.target;
    const err = validateForm(state, { [name]: rules[`${name}`] }, labels);
    (() => {
      setErrors((error) => ({ ...error, ...err }));
    })();
  };
  const handleSubmit = (SyntheticEvent) => {
    SyntheticEvent.preventDefault();
    (() => {
      setErrors({});
      setIsSubmitting(true);
      setErrors(validateForm(state, rules, labels));
    })();
  };
  const clearValues = (action = true) => {
    if (action) {
      (() => {
        setState(initialState);
        setErrors({});
      })();
    }
  };
  const setValues = (data = {}, action) => {
    (() => {
      if (Object.keys(data).length > 0) {
        setState((state2) => state2 = { ...state2, ...data });
      } else if (action === "replace") {
        setState((state2) => ({ ...data }));
      }
    })();
  };
  const setValidationRules = (data = {}, action) => {
    (() => {
      if (Object.keys(data).length > 0) {
        setRules((state2) => state2 = { ...state2, ...data });
      } else if (action === "replace") {
        setRules((state2) => ({ ...data }));
      }
    })();
  };
  const setFields = (data = {}, action) => {
    if (Object.keys(data).length > 0) {
      (() => {
        if (action === "replace") {
          setLabels((state2) => ({ ...data }));
        } else {
          setLabels((state2) => state2 = { ...state2, ...data });
        }
      })();
    }
  };
  const setServerErrors = (err = {}, action) => {
    (() => {
      if (Object.keys(err).length > 0) {
        setErrors((state2) => state2 = { ...state2, ...err });
      } else if (action === "replace") {
        setErrors((state2) => ({ ...err }));
      }
    })();
  };
  const updateIsSubmitting = (status) => {
    (() => {
      setIsSubmitting(status);
    })();
  };
  return {
    handleChange,
    handleBlur,
    handleKeyDown,
    handleSubmit,
    isSubmitting,
    updateIsSubmitting,
    errors: errors2,
    state,
    rules,
    clearValues,
    setValues,
    setValidationRules,
    setFields,
    setServerErrors
  };
}
export {
  useFormValidation as u
};
