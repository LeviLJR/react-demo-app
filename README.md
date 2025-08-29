# React Demo App

A demo social media application built with React and Vite. This project showcases a simple feed of posts and comments, user authentication, and modern component-based architecture. It is designed for learning, prototyping, and demonstration purposes.

## Features
- Modern React (functional components, hooks, context)
- Vite for fast development and build
- Authentication context
- Post and comment feed
- Reusable UI components (Button, Card, List, Section, Layout)
- Routing with React Router
- Unit and integration tests with Vitest

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```sh
npm install
```

### Running the App
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Running Tests
```sh
npm test
```

## Project Structure
```
react-demo-app/
├── index.html
├── package.json
├── vite.config.js
├── vitest.setup.js
├── public/
│   └── logo.svg
├── src/
│   ├── main.jsx
│   ├── main.css
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── CommentCard.jsx
│   │   ├── CommentList.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostList.jsx
│   │   ├── Section.jsx
│   │   └── Layout/
│   │       └── index.jsx
│   │   └── tests/
│   │       ├── api.test.jsx
│   │       ├── Button.test.jsx
│   │       ├── CommentList.test.jsx
│   │       ├── Detail.test.jsx
│   │       ├── Home.test.jsx
│   │       ├── PostCard.test.jsx
│   │       ├── PostLists.test.jsx
│   │       ├── Section.test.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Detail.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── services/
│   │   └── api.js
```

## Key Files
- `src/main.jsx`: App entry point
- `src/components/`: Reusable UI components
- `src/pages/`: Main app pages
- `src/contexts/AuthContext.jsx`: Authentication logic
- `src/routes/AppRoutes.jsx`: Routing setup
- `src/services/api.js`: API service layer

## Contributing
Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
