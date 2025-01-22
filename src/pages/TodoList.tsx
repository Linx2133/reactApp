import React, { useState } from 'react';
import { Plus, Check, X } from 'lucide-react';
import { useTodo } from '../store/TodoContext';

export default function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const { state, dispatch } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo.trim() });
      setNewTodo('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-orange-800 dark:text-orange-400 mb-8">Ma Liste de Tâches</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Ajouter une nouvelle tâche..."
            className="flex-1 p-3 border-2 border-orange-200 dark:border-orange-700 dark:bg-gray-800 dark:text-white rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-600 dark:bg-orange-700 text-white rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {state.todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:-rotate-1 transition-all duration-300 ${
              todo.completed ? 'opacity-75' : ''
            }`}
          >
            <span
              className={`flex-1 ${
                todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'
              }`}
            >
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className="p-2 text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 focus:outline-none"
              >
                <Check className={`w-5 h-5 ${todo.completed ? 'text-green-600 dark:text-green-500' : ''}`} />
              </button>
              <button
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                className="p-2 text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}