/* eslint-disable jest/expect-expect */
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index";

test("clicking the button calls the event hanlder once", () => {
  const mockHandler = jest.fn();

  render(<Button onClick={mockHandler}>This is a test text</Button>);

  const button = screen.getByTestId("redirect-button");
  fireEvent.click(button);

  expect(mockHandler).toHaveBeenCalledTimes(1);
});
