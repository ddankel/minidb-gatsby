const excludeStateAttributes =
  (...excludedAttributes) =>
  (state) => {
    const retainedAttributes = Object.entries(state).filter(
      ([key]) => ![...excludedAttributes].includes(key)
    );
    return Object.fromEntries(retainedAttributes);
  };

export default excludeStateAttributes;
