import { navigate } from "gatsby";
import queryString from "query-string";
import { useEffect } from "react";

import { useFilterActions } from "@/common/stores/useFilterStore";
import { FilterLabel } from "../stores/useFilterStore/types";

type HookProps = {
  path: string;
  query: string;
};

/**
 * Update the filter zustand states from the querystring
 *
 * To accomplish this on page load, if a querystring is present, the zustand
 * filter states are first cleared.  Then they're repopulated with values from
 * the querystring.  Finally the page is reloaded.  This last step clears the
 * querystring in the browser so a browser page refresh won't reset the
 * filters.
 */
const useFilterStateFromQueryString = ({ path, query: rawQueryString }: HookProps) => {
  const { setFilter, resetFilters } = useFilterActions();

  useEffect(() => {
    if (!rawQueryString) return;

    const qs = queryString.parse(rawQueryString);

    // First clear the filter state...
    resetFilters();

    // Then merge in any filters that came in on the query string
    for (const [key, value] of Object.entries(qs)) {
      if (value === null) {
        // Do nothing
      } else if (Array.isArray(value)) {
        setFilter(key as FilterLabel, value as string[]);
      } else if (value !== null) {
        setFilter(key as FilterLabel, value);
      }
    }

    // Then redirect to clear the querystring
    navigate(path);
  }, [path, rawQueryString, setFilter]);
};

export default useFilterStateFromQueryString;
