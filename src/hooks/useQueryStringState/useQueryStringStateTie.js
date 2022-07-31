import { useEffect } from "react";
import { useQueryParamString } from "react-use-query-param-string";
import { useStoreState } from "../useStore";

/**
 * Define connection between a querystring parameter value and a store value
 *
 * If a query string value is found for the provided key, that value will be
 * saved to the app store then the query string will be cleared.
 *
 * @param   {[type]}  key  [key description]
 *
 * @return  {[type]}       [return description]
 */
export const useQueryStringStateTie = (key) => {
  const stateKey = `${key}Filter`;

  const [_stateValue, setState] = useStoreState(stateKey);
  const [queryValue, setQueryValue, initialized] = useQueryParamString(key);

  useEffect(() => {
    if (!initialized || !queryValue) return;
    setState(queryValue);
    setQueryValue(undefined);
  }, [initialized, setState, queryValue, setQueryValue]);
};

export default useQueryStringStateTie;
