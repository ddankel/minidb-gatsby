import { useMemo } from "react";

const useDedupedArray = (inputArray) => {
  return useMemo(() => {
    const allItems = inputArray.filter((item) => item !== null).flat();
    const dedupedArray = [...new Set(allItems)];
    return dedupedArray.sort();
  });
};

export default useDedupedArray;
