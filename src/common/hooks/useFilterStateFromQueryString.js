import { useEffect } from "react";
import { navigate } from "gatsby";
import queryString from "query-string";

import { useFilterActions } from "@/common/hooks/useFilterStore";

/**
 * Update the filter zustand states from the querystring
 *
 * To accomplish this on page load, if a querystring is present, the zustand
 * filter states are first cleared.  Then they're repopulated with values from
 * the querystring.  Finally the page is reloaded.  This last step clears the
 * querystring in the browser so a browser page refresh won't reset the
 * filters.
 */
const useFilterStateFromQueryString = ({ path, query: rawQueryString }) => {
  const { setFilter } = useFilterActions();

  useEffect(() => {
    if (!rawQueryString) return;

    const qs = queryString.parse(rawQueryString);

    // First clear the filter state...
    setFilter(undefined, undefined, { merge: false });

    // Then merge in any filters that came in on the query string
    for (const [key, value] of Object.entries(qs)) {
      setFilter(key, value, { merge: true });
    }

    // Then redirect to clear the querystring
    navigate(path);
  }, [path, rawQueryString, setFilter]);
};

export default useFilterStateFromQueryString;
