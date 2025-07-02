import { useState, useEffect } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

export default function App() {
  // Initialize state, loading from localStorage if data exists
  // If no data exists, use a default set of tasks
  // This ensures that the app can run without needing to fetch data from an API
  // and allows for easy testing and development.
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [
    { id: 1, activity: 'Learn React', completed: false },
    { id: 2, activity: 'Build a Todo App', completed: true },
    { id: 3, activity: 'Deploy to Vercel', completed: false },
  ];
});

//Persist tasks whenever they change
useEffect (() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
 }, [tasks]);


 // Toggle task completed status immutably
  // This function takes an id and toggles the completed status of the task with that id
  // It uses the functional form of setState to ensure it works correctly with the current state
  // This is important for performance and correctness, especially in larger applications
  // where state updates can be asynchronous.
  const toggleTask = id => {
    setTasks(curr => curr.map(t => t.id === id ? {...t, completed: !t.completed} : t)
  );
  };

  // Add a new task at the beginning of the list
  const addTask = activity => {
    setTasks(curr => [
    {id: Date.now(), activity, completed: false},
    ...curr
    ]);
  };


  return (
    <div className ="min-h-screen bg-emerald-400 p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      <TaskForm onAdd={addTask} />

    {tasks.length ? (
      tasks.map(task => (
        <Task key={task.id} {...task} onToggle={toggleTask} />
      ))
    ) : (
      <p className="text-red-500">No tasks yet. Add a new task!</p>
    )}
    </div>
  );

}
