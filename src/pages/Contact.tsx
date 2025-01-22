import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@example.com?subject=Nouveau message&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-orange-800 dark:text-orange-400 mb-8">Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform hover:-rotate-1 transition-transform duration-300">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Écrivez votre message ici..."
            rows={8}
            className="w-full p-4 border-2 border-orange-200 dark:border-orange-700 dark:bg-gray-700 dark:text-white rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 resize-none"
          />
          
          <button
            type="submit"
            className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-orange-600 dark:bg-orange-700 hover:bg-orange-700 dark:hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transform hover:scale-105 transition-all duration-300"
          >
            <Send className="w-5 h-5 mr-2" />
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}