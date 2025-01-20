// Sets up a mock implementation of the window.matchMedia function for testing purposes
export const setupMatchMedia = () => {
  // Define a mock implementation of matchMedia on the window object
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false, // Default to no matches for any media query
      media: query, // Return the media query string
      onchange: null, // Placeholder for change event handler
      addListener: jest.fn(), // Mock addListener function
      removeListener: jest.fn(), // Mock removeListener function
      addEventListener: jest.fn(), // Mock addEventListener function
      removeEventListener: jest.fn(), // Mock removeEventListener function
      dispatchEvent: jest.fn(), // Mock dispatchEvent function
    })),
  });
};
