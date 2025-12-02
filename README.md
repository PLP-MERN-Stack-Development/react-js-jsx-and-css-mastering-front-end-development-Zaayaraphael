# PLP Task Manager - React & Tailwind CSS Application

A modern, responsive task management application built with React 18, Vite, Tailwind CSS, and React Router. This project demonstrates component architecture, state management, hooks usage, API integration, and responsive design.

## 🚀 Features

- ✅ **Task Management**: Create, complete, delete, and filter tasks (All, Active, Completed)
- 🌓 **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- 📡 **API Integration**: Fetch and display data from JSONPlaceholder API with search functionality
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 💾 **Local Storage**: Automatic persistence of tasks and theme preferences
- 🧭 **Client-Side Routing**: Smooth navigation with React Router
- ⚡ **Fast Development**: Built with Vite for lightning-fast HMR

![Screenshot](./Screenshot%20(116).png)
![Screenshot](./Screenshot%20(117).png)

## 🛠️ Technology Stack

- **React 18.3.1** - UI library
- **Vite 5.4.3** - Build tool and dev server
- **Tailwind CSS 3.4.10** - Utility-first CSS framework
- **React Router 6.26.0** - Client-side routing
- **Vitest 2.0.5** - Testing framework
- **@fast-check/vitest 0.1.3** - Property-based testing

## 📦 Installation

1. Clone the repository:
   ```bash
   
   cd react-tailwind-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
react-tailwind-assignment/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx       # Button component with variants
│   │   ├── Card.jsx         # Card container component
│   │   ├── Navbar.jsx       # Navigation bar with theme toggle
│   │   ├── Footer.jsx       # Footer with links
│   │   ├── Layout.jsx       # Layout wrapper component
│   │   ├── TaskManager.jsx  # Task management component
│   │   └── APIDisplay.jsx   # API data display component
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   ├── Tasks.jsx        # Tasks page
│   │   ├── API.jsx          # API data page
│   │   └── NotFound.jsx     # 404 page
│   ├── context/             # React context providers
│   │   └── ThemeContext.jsx # Theme management context
│   ├── hooks/               # Custom React hooks
│   │   └── useLocalStorage.js # localStorage hook
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── .kiro/                   # Spec-driven development files
│   └── specs/
│       └── react-assignment-completion/
│           ├── requirements.md  # Feature requirements
│           ├── design.md        # Design document
│           └── tasks.md         # Implementation tasks
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── index.html               # HTML entry point
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI

## 🎨 Components

### Button
Reusable button component with multiple variants (primary, secondary, danger, success, warning) and sizes (sm, md, lg).

### Card
Container component for displaying content in a boxed layout with optional title and custom styling.

### Navbar
Navigation bar with links to all pages, theme toggle button, and responsive mobile menu.

### Footer
Footer component with copyright information and social media links.

### Layout
Wrapper component that provides consistent structure with Navbar and Footer across all pages.

### TaskManager
Full-featured task management component with add, complete, delete, and filter functionality.

### APIDisplay
Component that fetches and displays posts from JSONPlaceholder API with loading states, error handling, and search functionality.

## 🌓 Theme Management

The application includes a theme context that manages light/dark mode:
- Toggle between themes using the button in the navbar
- Theme preference is automatically saved to localStorage
- Dark mode classes are applied using Tailwind's `dark:` prefix

## 💾 Local Storage

The application uses localStorage for:
- **Tasks**: All tasks are automatically saved and restored on page reload
- **Theme**: Theme preference persists across sessions

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: Single-column layout, hamburger menu
- **Tablet**: Two-column grid layouts
- **Desktop**: Multi-column grid layouts, full navigation











## 🔗 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)


---

