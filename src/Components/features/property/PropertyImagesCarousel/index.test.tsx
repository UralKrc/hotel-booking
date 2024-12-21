import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import PropertyImagesCarousel from ".";
import { theme } from "../../../../Theme/theme";

// Mock matchMedia for Ant Design
Object.defineProperty(window, "matchMedia", {
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});

describe("PropertyImagesCarousel", () => {
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
