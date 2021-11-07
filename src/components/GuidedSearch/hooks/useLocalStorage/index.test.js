import { renderHook, act } from "@testing-library/react-hooks";
import useLocalStorage from "./index";

const storageKey = "test_key";
const testValue = { a: "test", b: "foo" };

beforeEach(() => {
  localStorage.clear();
});

it("reads existing value from localStorage", () => {
  localStorage.setItem(storageKey, JSON.stringify(testValue));
  const { result } = renderHook(() => useLocalStorage(storageKey));
  const [storedValue, _setValue] = result.current;
  expect(storedValue).toEqual(testValue);
});

it("initializes with a provided value", () => {
  const { result } = renderHook(() => useLocalStorage(storageKey, testValue));
  const [storedValue, _setValue] = result.current;
  expect(storedValue).toEqual(testValue);
});

it("sets the value correctly", () => {
  const { result } = renderHook(() => useLocalStorage(storageKey));
  const [_storedValue, setValue] = result.current;

  act(() => setValue(testValue));
  expect(localStorage.setItem).toHaveBeenLastCalledWith(storageKey, JSON.stringify(testValue));
  expect(result.current[0]).toEqual(testValue);
});
