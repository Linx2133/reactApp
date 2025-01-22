import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Image, ListTodo, Sun, Moon } from 'lucide-react';
import HomePage from './pages/HomePage';
import Gallery1 from './pages/Gallery1';
import Gallery2 from './pages/Gallery2';
import TodoList from './pages/TodoList';
import { TodoProvider } from './store/TodoContext';
import { ThemeProvider, useTheme } from './store/ThemeContext';

function Navigation() {
  const { state: { theme }, dispatch } = useTheme();

  return (
    <nav className="bg-orange-600 dark:bg-orange-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="reactApp/" className="flex items-center px-3 py-2 text-white hover:text-orange-200">
              <Home className="w-5 h-5 mr-1" />
              Accueil
            </Link>
            <Link to="reactApp/gallery1" className="flex items-center px-3 py-2 text-white hover:text-orange-200">
              <Image className="w-5 h-5 mr-1" />
              Les chats
            </Link>
            <Link to="reactApp/gallery2" className="flex items-center px-3 py-2 text-white hover:text-orange-200">
              <Image className="w-5 h-5 mr-1" />
              Kévin
            </Link>
            <Link to="reactApp/todo" className="flex items-center px-3 py-2 text-white hover:text-orange-200">
              <ListTodo className="w-5 h-5 mr-1" />
              Todo List
            </Link>
          </div>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            className="p-2 text-white hover:text-orange-200 focus:outline-none"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function App() {
  console.log('Le composant App est monté');
  return (
    <ThemeProvider>
      <TodoProvider>
        <Router>
          <div className="min-h-screen bg-orange-50 dark:bg-gray-900 transition-colors duration-200">
            <Navigation />
            <main className="max-w-7xl mx-auto px-4 py-8">
              <Routes>
                <Route path="reactApp/" element={<HomePage />} />
                <Route path="reactApp/gallery1" element={<Gallery1 />} />
                <Route path="reactApp/gallery2" element={<Gallery2 />} />
                <Route path="reactApp/todo" element={<TodoList />} />
              </Routes>
            </main>
          </div>
        </Router>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;