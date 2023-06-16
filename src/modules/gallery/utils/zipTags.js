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
 * The following output is expected:
 *
 * @param   {Array<Object>}  allTags      Tags for the whole collection
 * @param   {Array<Object>}  filteredTags Tag counts for only the filtered
 *                                        miniatures
 *
 * @return  {Array<Object>}               Array with entry for all tags in the
 *                                        whole collection
 */
const zipTags = (allTags, filteredTags) => {
  if (!filteredTags) return allTags;

  const result = allTags.map(({ name }) => {
    const count = filteredTags.find((item) => item.name === name)?.count || 0;
    return { name, count };
  });

  return result;
};

export default zipTags;
