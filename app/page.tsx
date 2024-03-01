'use client';

import { useCompletion } from 'ai/react';

export default function Chat() {
  const { completion, input, handleInputChange, handleSubmit, error, isLoading } = useCompletion({ api: '/api/exec' });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h4 className="text-xl font-bold text-gray-900 md:text-xl pb-4 underline">
        <a href='/execute'>Go to: Workflow Example</a>
      </h4>
      <h4 className="text-xl font-bold text-gray-900 md:text-xl pb-4 underline">
        <a href='/chat'>Go to: Agent Example</a>
      </h4>
    </div>
  );
}
