import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchProductForm from "../forms/SearchProductForm";

test("The user can see the elements in the platform", () => {
  render(<SearchProductForm />);

  const form = screen.getByTestId("form");
  const inputSearch = screen.getByTestId("input-search");
  const buttonOnSearch = screen.getByTestId("btn-search");

  expect(form).toBeInTheDocument();
  expect(form.tagName).toBe("FORM");

  expect(inputSearch).toBeInTheDocument();
  expect(inputSearch.tagName).toBe("INPUT");
  userEvent.type(inputSearch, "remera");

  expect(buttonOnSearch).toBeInTheDocument();
  expect(buttonOnSearch.tagName).toBe("BUTTON");
  expect(buttonOnSearch.textContent).not.toBe("Buscar");
  userEvent.click(buttonOnSearch);
});
