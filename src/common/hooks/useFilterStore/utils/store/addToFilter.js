const addToFilter = (existingFilter, newItem) => [...new Set([...existingFilter, newItem])].sort();

export default addToFilter;
