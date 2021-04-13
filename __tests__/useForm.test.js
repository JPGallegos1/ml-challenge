import useForm from "../hooks/useForm";
import { renderHook, act } from "@testing-library/react-hooks";

test("The state will change when the user search for a product", () => {
  const { result } = renderHook(() => useForm());

  act(() => {
    result.current.setQuery("remera");
  });

  expect(result.current.query).toBe("remera");
});
