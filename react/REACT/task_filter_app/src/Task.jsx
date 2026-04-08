import React, { useState, useEffect } from 'react';

function Task(){
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      // Default tasks if no localStorage
      const defaultTasks = [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build task app', completed: true },
        { id: 3, text: 'Style components', completed: false },
        { id: 4, text: 'Deploy app', completed: false }
      ];
      setTasks(defaultTasks);
      localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // all
  });

  return (<>
    <h1>Task Filter App</h1>
    <div className="task-input">
      <input 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
    <div className="filters">
      <button 
        className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button 
        className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button 
        className={filter === 'pending' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
    <ul className="task-list">
      {filteredTasks.map(task => (
        <li key={task.id} className="task-item">
          <input 
            type="checkbox" 
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span className={task.completed ? 'completed' : ''}>{task.text}</span>
        </li>
      ))}
    </ul>
  </>);
}
export default Task;
