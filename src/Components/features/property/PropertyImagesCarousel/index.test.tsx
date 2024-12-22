import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import PropertyImagesCarousel from ".";
import { setupMatchMedia } from "../../../../Store/property/utils/testUtils";
import { theme } from "../../../../Theme/theme";

describe("PropertyImagesCarousel", () => {
  beforeAll(() => {
    setupMatchMedia();
  });

  const mockImages = [
    {
      id: "1",
      url: "https://example.com/image1.jpg",
      width: 800,
      height: 600,
    },
    {
      id: "2",
      url: "https://example.com/image2.jpg",
      width: 800,
      height: 600,
    },
  ];

  it("renders all images", () => {
    render(
      <ThemeProvider theme={theme}>
        <PropertyImagesCarousel images={mockImages} />
      </ThemeProvider>
    );

    mockImages.forEach((mockImage) => {
      const images = screen.getAllByAltText(`property-${mockImage.id}`);
      expect(images.length).toBeGreaterThan(0);
      images.forEach((img) => {
        expect(img).toHaveAttribute("src", mockImage.url);
      });
    });
  });

  it("renders with lazy loading", () => {
    render(
      <ThemeProvider theme={theme}>
        <PropertyImagesCarousel images={mockImages} />
      </ThemeProvider>
    );

    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("loading", "lazy");
    });
  });

  it("renders empty carousel when no images provided", () => {
    render(
      <ThemeProvider theme={theme}>
        <PropertyImagesCarousel images={[]} />
      </ThemeProvider>
    );

    const carousel = screen.getByTestId("carousel-container");
    expect(carousel).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
