exports.validator = (params) => {
  console.log("validator ", params);
  if (!Array.isArray(params)) throw new Error("Array is expected!");
  if (!isFinite(params[0] || !isFinite(params[1])))
    throw new Error("Number is expected!");
  return params;
};

exports.binValidator = (params) => {
  console.log("validator ", params);
  if (!Array.isArray(params)) throw new Error("Array is expected!");
  if (params.length != 2) throw new Error("Two values are expected!");
  if (!isFinite(params[0] || !isFinite(params[1])))
    throw new Error("Number is expected!");
  return params;
};
