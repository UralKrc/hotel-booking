import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Carousel from ".";
import { theme } from "../../../Theme/theme";

describe("Carousel Component", () => {
  test("renders carousel and navigates through slides", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </Carousel>
      </ThemeProvider>
    );

    expect(screen.getAllByText("Slide 1")[0]).toBeVisible();

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]);

    expect(screen.getAllByText("Slide 2")[0]).toBeVisible();
  });
});
