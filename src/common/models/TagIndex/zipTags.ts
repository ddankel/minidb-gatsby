import { TagIndex } from ".";
import { CategorizedTagCounts, TagCount, TagIndexData } from "./types";

/**
 * Zip tags together to display filters
 *
 * This function adds entiries to the filtered tags array for tags that have
 * been filtered out and gives them a count of zero.
 *
 *
 * @example
 *
 * const allTags: = [{ name: Painted,     count: 192 }
 *                   { name: Prepainted,  count: 21  }
 *                   { name: Unassembled, count: 17  }
 *                   { name: Unpainted,   count: 11  }
 *                   { name: Wip,         count: 3   }];
 *
 * const filteredTags =  [{ name: Painted,     count: 22 }
 *                        { name: Unassembled, count: 3  }
 *                        { name: Unpainted,   count: 3  }];
 *
 * console.log(zipTags(allTags, filteredTags));
 *
 * Expected output:
 * [{ name: Painted,     count: 22 }
 *  { name: Prepainted,  count: 0  }
 *  { name: Unassembled, count: 3  }
 *  { name: Unpainted,   count: 3  }
 *  { name: Wip,         count: 0  }]
 *
 */
export const zipTags = (allTags: TagCount[], filteredTags: TagCount[]) => {
  if (!filteredTags) return allTags;

  const result = allTags.map(({ name }) => {
    const count = filteredTags.find((item) => item.name === name)?.count || 0;
    return { name, count };
  });

  return result;
};

/**
 * Call zipTags on all keys in the allTags object
 */
export const zipAllTags = (allTags: TagIndex, filteredTags: TagIndex): TagIndexData => {
  const zippedTags: { [key: string]: TagCount[] } = {};
  for (const key of TagIndex.tagKeys) {
    const allTagsOfThisKey = allTags[key as keyof TagIndex] as TagCount[];
    const filteredTagsOfThisKey = filteredTags[key as keyof TagIndex] as TagCount[];
    zippedTags[key] = zipTags(allTagsOfThisKey, filteredTagsOfThisKey);
  }
  return zippedTags;
};
