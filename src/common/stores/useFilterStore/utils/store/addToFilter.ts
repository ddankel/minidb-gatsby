const addToFilter = (existingFilter: string[], newItem: string) => {
  return [...new Set([...existingFilter, newItem])].sort();
};

export default addToFilter;
