'use client';

import { useCompletion } from 'ai/react';

export default function Chat() {
  const { completion, input, handleInputChange, handleSubmit, error, isLoading } = useCompletion({ api: '/api/exec' });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h4 className="text-xl font-bold text-gray-900 md:text-xl pb-4">
        Workflow Example
      </h4>
      {error && (
        <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
          {error.message}
        </div>
      )}
      <div className="whitespace-pre-wrap">
        {completion}
      </div>
      <form onSubmit={isLoading ? () => {} : handleSubmit}>
        <input
          disabled={isLoading}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={isLoading ? 'Loading...' : input}
          placeholder="Enter a topic..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
