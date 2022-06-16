//to check if the object is empty or not (returns true/false)
export const isEmptyObj = (obj) => {
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
};
