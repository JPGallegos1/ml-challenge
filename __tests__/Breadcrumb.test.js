import { render, screen } from "@testing-library/react";
import Breadcrumb from "../components/Breadcrumb";

test("The user can see the list of categories", () => {
  render(<Breadcrumb />);

  const breadcrumb = screen.getByTestId("breadcrumb");

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb.tagName).toBe("UL");
});
