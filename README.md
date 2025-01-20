## Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/UralKrc/hotel-booking.git
   cd hotel-booking
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory if needed:

   ```bash
   cp .env.example .env
   ```

## Available Scripts

In the project directory, you can run:

### `yarn start`

```bash
yarn start
```

Runs the app in development mode.\
Open [http://localhost:3000] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

```bash
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn lint`

```bash
yarn lint
```

Runs ESLint to check for code style issues and potential errors.

### `yarn format`

```bash
yarn format
```

Formats the code using Prettier according to the project's style guidelines.

## Testing

### Running Unit Tests

```bash
# Run all tests
yarn run test
# Run tests with coverage report
yarn run test --coverage
```

The tests are organized in the following way:

- **Component Tests**: Located alongside their respective components as `index.test.tsx`
- **Store Tests**: Collected in `__tests__` directory under the store folder
- **Utility Tests**: Grouped in `__tests__` directory under the utils folder

Each test file follows the naming convention matching its source file:

- Components: `index.test.tsx`
- Store and Utils: `[filename].test.ts`

### Running E2E Tests

```bash
# Run all tests
yarn cypress:run

# Open Cypress UI
yarn cypress:open
```

### Test Structure

The E2E tests cover two main areas:

1. **Properties Page** (`cypress/e2e/properties.cy.ts`)

   - Verifies properties table loads correctly
   - Checks table headers and content
   - Tests navigation to property details

2. **Property Page** (`cypress/e2e/property.cy.ts`)

   - Verifies the carousel functionality
   - Verifies the property details are displayed correctly
   - Test navigation to policies

3. **Policies Page** (`cypress/e2e/policies.cy.ts`)

   - Tests navigation through property details to policies
   - Verifies correct number of policy cards
   - Checks policy information display
   - Tests policy editing functionality:
     - Amount changes
     - Charge type changes
   - Validates form interactions and data updates

### Test Data

The tests use mock data that matches the application's data structure. This ensures consistent testing across different environments.

### State Management with Redux Toolkit

Utilized Redux Toolkit to simplify Redux setup, improve code maintainability, and leverage built-in best practices.

- **Slices**: Defined state slices for properties, encapsulating reducers and actions.
- **Thunks**: Managed asynchronous operations like fetching and editing policies with thunks.
- **Selectors**: Created selector functions to efficiently access state data.

### Data Persistence with `sessionStorage`

Chosen `sessionStorage` to persist edited policies, ensuring that user modifications remain intact across page reloads within the same session.

- **Load from `sessionStorage`**: On initialization, the application checks for existing data in `sessionStorage` before loading initial data.
- **Save to `sessionStorage`**: Only updates to policies trigger saving the new state to `sessionStorage`, avoiding unnecessary writes during initial load.

### Type Safety with TypeScript

Implemented TypeScript to enforce type safety, reduce runtime errors, and enhance developer experience through better tooling and autocomplete features.

### Component-Based Architecture

Adopted a modular component-based architecture for scalability and reusability.

- **Presentational Components**: Focused on UI rendering with minimal logic.
- **Container Components**: Handled data fetching and state management, connecting to Redux as needed.

### UX Improvements

- **Breadcrumb Navigation**: Enhanced navigation with a dynamic Breadcrumb component.
- **Loading States**: Provided visual feedback during data fetching with a Loading component.
- **Responsive Design**: Ensured the application is usable across various device sizes.

## License

This project is licensed under the [MIT License](LICENSE).

---
