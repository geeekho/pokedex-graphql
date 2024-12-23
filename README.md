This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Pokedex App

A **Pokedex** app built with **Next.js 15**, **GraphQL**, and **ShadCN UI**. The app allows users to explore detailed Pokémon information, such as stats, types, evolutions, and more, fetched from a GraphQL API. It uses **Next.js** for **Server-Side Rendering (SSR)** and dynamic routing, and leverages **ShadCN UI** for a customizable and responsive user interface. The application also features comprehensive testing with **Jest** and **Storybook**, ensuring a high-quality, scalable experience.

---

## Features

- **Pokémon Details**: View detailed Pokémon stats, types, evolutions, and more.
- **GraphQL Integration**: Fetch Pokémon data dynamically from a GraphQL API.
- **SSR and Dynamic Routing**: Fully rendered pages on the server, with dynamic routing for Pokémon details.
- **Customizable UI**: Built with **ShadCN UI** for responsive and customizable components.
- **Caching**: Optimized with Next.js caching for faster load times and better performance.
- **Testing**: Comprehensive testing using **Jest** for unit tests and **Storybook** for UI component testing.

---

## Project Structure

The project is organized into several key directories and files:

### **app/**

Contains the main application and routing files.

- `(search)`: Search-related pages and logic.
  - `page.tsx`: Main search page for filtering Pokémon.
- `[filter]`: Dynamic filter pages based on different search filters.
  - `page.tsx`: Displays filtered results based on user selections.
- `layout.tsx`: Main layout file for the app.
- `not-found.tsx`: Custom "not found" page for handling 404 errors.

### **components/**

Contains React components that make up the UI.

- **Pokemon**: Components related to displaying Pokémon data.
  - **Tabs**: Contains components for displaying evolution and stats tabs.
    - `Evolutions.tsx`: Displays Pokémon evolution details.
    - `Stats.tsx`: Displays Pokémon stats.
  - `DetailsSection.tsx`: A section component for displaying detailed Pokémon info.
  - `PokemonCard.tsx`: Card component to showcase individual Pokémon.
  - `PokemonType.tsx`: A single Pokémon type component.
  - `PokemonTypes.tsx`: A list component for displaying Pokémon types.
- **search**: Components related to the search functionality.

  - `SearchCard.tsx`: Container for the search form.
  - `SearchForm.tsx`: Actual form for submitting search queries.

- **ui**: Customizable UI components built using **ShadCN UI** for consistent and responsive design.

### **lib/**

Contains utility files and GraphQL queries.

- `queries.ts`: GraphQL queries for fetching Pokémon data.
- `utils.ts`: Utility functions used across the app.

### **public/**

Public assets like images and other resources.

- **assets**: Contains static assets such as images used in the app.

### **schema/**

Contains **Zod** schema definitions for validating data inputs.

- `searchSchema.ts`: Zod schema for validating search parameters on the search page.

### **types/**

TypeScript types related to the application.

- `pokemon.ts`: Types related to Pokémon API response data, including details like stats, types, and evolutions.

### **utils/**

Utility functions and constants used in the application.

- `color.helper.ts`: Contains the `getPokemonBackgroundColor` function and color constants for styling Pokémon cards.
- `constants.ts`: Defines constants used across the app.
- `pokemon.ts`: Server-side API actions for interacting with Pokémon data.

### **\_\_tests\_\_**

Contains unit and integration tests for various parts of the application.

### **\_\_mocks\_\_**

Contains mock data used for testing.

---

## How to Run the Project

To get started with the app, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pokedex-app.git
   cd pokedex-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   This will start the app in development mode at `http://localhost:3000`.

4. To build the production version of the app:

   ```bash
   npm run build
   ```

5. To start the production server:
   ```bash
   npm run start
   ```

---

## Features and Technologies

- **Next.js 15**: For SSR, dynamic routing, and optimization.
- **GraphQL**: Efficient data fetching for Pokémon details.
- **ShadCN UI**: A responsive, customizable UI component library for React.
- **Jest**: For unit testing various functions and components.
- **Storybook**: For UI component testing and development in isolation.
- **Next.js Caching**: Utilizes Next.js' built-in caching to improve performance and loading times.

---

## Testing

### **Jest**

Unit tests for various components and utility functions are written using **Jest**. You can run the tests with the following command:

```bash
npm run test
```

### **Storybook**

UI components are developed and tested in isolation using **Storybook**. To run Storybook, use the following command:

```bash
npm run storybook
```

---

## Deployment

The app can be easily deployed to platforms like **Vercel** or **Netlify** for automatic deployments, continuous integration, and optimized performance.

---

## Future Improvements

- **Enhanced Pokémon Search**: Improve search functionality to support more filters and advanced queries.

---

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repo, create a branch, and submit a pull request.

---
