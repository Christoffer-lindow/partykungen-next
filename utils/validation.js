export const formValidations = {
  shorterThan: (value, length) => value.length < length,
  longerThan: (value, length) => value.length > length,
  isNumeric: (value) => /^\d+$/.test(value),
  isEmptyString: (value) => value.length === 0,
};
