export const regEscape = (v) => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

export const parseLabelForNeedle = (label, needle) => {
  const rx = new RegExp(regEscape(needle), "gi");
  const matchingIndexes = [...label.matchAll(rx)].map((a) => a.index);
  const segments = [];
  let prevIndex = 0;

  matchingIndexes.forEach((index) => {
    segments.push(label.slice(prevIndex, index));
    segments.push(label.slice(index, index + needle.length));
    prevIndex = index + needle.length;
  });
  segments.push(label.slice(prevIndex, label.length));

  return segments;
};
