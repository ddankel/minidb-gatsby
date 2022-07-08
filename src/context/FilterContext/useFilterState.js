import { useEffect } from "react";
import { useQueryParamString } from "react-use-query-param-string";
import { useSessionStorage } from "react-use-storage";

/**
 * Mimic useState, syncing state with sessionstorage and the querystring
 *
 * @param   {String}  storageKey    The key to store the string under
 * @param   {String}  defaultValue  The default value for the state (optional)
 *
 * @return  {Array}                 The state getter and setter
 */
export const useFilterState = (storageKey, defaultValue) => {
  const [sessionVal, setSessionVal] = useSessionStorage(storageKey, defaultValue);
  const [queryVal, setQueryVal, initialized] = useQueryParamString(storageKey, defaultValue);

  useEffect(() => {
    if (!initialized) return;

    setSessionVal(queryVal);
  }, [initialized, setSessionVal, queryVal]);

  return [sessionVal, setQueryVal];
};

export default useFilterState;
