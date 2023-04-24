import React from "react";

import validateForm from "./validateForm";

function useFormValidation(initialState, validationRules, callBack = null) {
  const [state, setState] = React.useState(initialState);
  const [rules, setRules] = React.useState(validationRules);
  const [labels, setLabels] = React.useState();
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const submitting = React.useCallback(() => {
    if (isSubmitting) {
      let noErrors = 0;
      Object.keys(state).forEach((key) => {
        noErrors += errors[key].length;
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
      setState((state) => ({
        ...state,
        [field]: e.htmlValue,
      }));
      return;
    }
    const { name, value, files, type, checked } = e.target;
    if (type === "file") {
      if (files) {
        setState((state) => ({
          ...state,
          [name]: Object.values(files),
        }));
      }
    } else if (type === "tel") {
      let cleaned = value.replace(/\D/g, "");
      // Check if the input is of correct length
      let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        setState(() => ({
          ...state,
          [name]: `(${match[1]}) ${match[2]} - ${match[3]}`,
        }));
      } else {
        setState({
          ...state,
          [name]: value,
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
        setState((state) => (state = { ...state, ...data }));
      } else if (action === "replace") {
        setState((state) => (state = { ...data }));
      }
    })();
  };
  const setValidationRules = (data = {}, action) => {
    (() => {
      if (Object.keys(data).length > 0) {
        setRules((state) => (state = { ...state, ...data }));
      } else if (action === "replace") {
        setRules((state) => (state = { ...data }));
      }
    })();
  };
  const setFields = (data = {}, action) => {
    if (Object.keys(data).length > 0) {
      (() => {
        if (action === "replace") {
          setLabels((state) => (state = { ...data }));
        } else {
          setLabels((state) => (state = { ...state, ...data }));
        }
      })();
    }
  };
  const setServerErrors = (err = {}, action) => {
    (() => {
      if (Object.keys(err).length > 0) {
        setErrors((state) => (state = { ...state, ...err }));
      } else if (action === "replace") {
        setErrors((state) => (state = { ...err }));
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
    errors,
    state,
    rules,
    clearValues,
    setValues,
    setValidationRules,
    setFields,
    setServerErrors,
  };
}

export default useFormValidation;
