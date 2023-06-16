import buildAggregateHash from "./buildAggregateHash";

const aggregateCollectionTags = (collection) => {
  if (!collection) return [];

  return buildAggregateHash(collection);
};

export default aggregateCollectionTags;
