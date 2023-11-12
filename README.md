# GitHub Searcher

GitHub Searcher is a single-page application that leverages the GitHub Search API to allow users to search for GitHub users or repositories. The application is built with React.js, TypeScript, Redux with redux-persist, React Router, and vanilla CSS for styling.

## Features

- **Entity Type Selection**: Users can choose to search for either GitHub users or repositories using a dropdown menu.
- **Debounced Search Input**: Search queries are debounced to reduce the number of API calls, improving performance and user experience.
- **Infinite Scrolling**: Users can scroll through a seemingly endless list of search results, loaded dynamically as they scroll.
- **Responsive Design**: The layout adjusts gracefully to different screen sizes, ensuring a seamless experience on both desktops and mobile devices.
- **State Handling**: The application handles various states like initial load, loading, error, and empty results, providing feedback to the user at each stage.

## High-Level Solution

The solution involves setting up a React application with TypeScript, managing the application state using Redux, and persisting the search results with redux-persist. React Router manages the navigation, and the UI is built with vanilla CSS for simplicity and full control over the styling.

### Key Decisions:

- **Redux and redux-persist**: Chosen for state management to cache the API response data, reducing the need for unnecessary API calls and providing a faster user experience.
- **TypeScript**: Provides type safety, which helps to catch errors during development time and improves code readability and maintainability.
- **Debounce Implementation**: Added to the search input to prevent excessive and unnecessary API calls, which can lead to performance issues and rate limit problems with the GitHub API.
- **Infinite Scrolling**: Implemented to create a better user experience by loading additional data as needed rather than all at once.

## Setup and Run

1. Clone the repository:

```
git clone https://github.com/alaa-abdallah1/github-searcher.git
```

2. Install dependencies using

```
npm install
```

3. Start the development server with

```
npm run dev
```

5. Build the project for production using

```
npm run build
```

7. Preview the production build with

```
npm run preview
```

## Project Structure

- `/src`: Source files for the application.
- `/src/components`: Reusable React components.
- `/src/pages`: Components representing pages within the app.
- `/src/store`: Redux store configuration, reducers, and actions.
- `/src/types`: TypeScript type definitions and interfaces.
- `/src/services`: Services for external API calls to GitHub.
- `/src/styles`: Global and component-specific styles.

## Built With

- [React.js](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [Redux](https://redux.js.org/) with [redux-persist](https://github.com/rt2zz/redux-persist) - For state management and persistence
- [React Router](https://reactrouter.com/) - For navigation
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- Vanilla CSS - For styling without any frameworks

## Future Enhancements

- Implement unit and integration tests to ensure reliability and facilitate easier refactoring.
- Explore server-side rendering (SSR) for improved initial load performance and SEO benefits.

## Contributing

If you'd like to contribute to the project, feel free to submit a pull request or open an issue on the repository.

## Credits

This project was created by [Alaa Abdallah](https://github.com/alaa-abdallah1)
