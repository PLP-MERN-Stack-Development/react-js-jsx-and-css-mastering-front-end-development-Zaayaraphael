import React from 'react';
import TaskManager from '../components/TaskManager';

/**
 * Tasks page component
 */
const Tasks = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Task Manager
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your tasks efficiently with our intuitive task manager.
        </p>
      </div>
      <TaskManager />
    </div>
  );
};

export default Tasks;
