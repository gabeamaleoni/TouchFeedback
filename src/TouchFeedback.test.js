import React from "react";
import { render } from "@testing-library/react";
import TouchFeedback from "./TouchFeedback";

test("renders learn react link", () => {
  const { getByText } = render(<TouchFeedback />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
