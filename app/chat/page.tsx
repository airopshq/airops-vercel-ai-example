'use client';

import { useState } from 'react'
import { useChat } from 'ai/react';
import { v4 as uuidv4 } from 'uuid';

export default function Chat() {
  const [sessionId, setSessionId] = useState(uuidv4());
  const { messages, input, handleInputChange, handleSubmit, error, isLoading } = useChat(
    { api: '/api/chat', body: { session_id: sessionId } }
  );

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h4 className="text-xl font-bold text-gray-900 md:text-xl pb-4">
        Agent Example
      </h4>
      {error && (
        <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
          {error.message}
        </div>
      )}
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
      <form onSubmit={isLoading ? () => {} : handleSubmit}>
        <input
          disabled={isLoading}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={isLoading ? 'Loading...' : input}
          placeholder="Enter a message..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
