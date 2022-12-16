import useQueryStringStateTie from "./useQueryStringStateTie";

/**
 * Define events that update the app state from the Query String
 *
 * For example, if the app sees ...?race=elf, set the 'race' value of the filter store to 'elf'
 */
const useQueryParamState = () => {
  useQueryStringStateTie("race");
  useQueryStringStateTie("archetype");
  useQueryStringStateTie("weapon");
  useQueryStringStateTie("armor");
  useQueryStringStateTie("painted");
  useQueryStringStateTie("line");
};

export default useQueryParamState;
