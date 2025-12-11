import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import SearchFilter from "./components/SearchFilter";
import TaskList from "./components/TaskList";
import { loadTasks, saveTasks } from "./utils/storage";

export default function App() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all"); // all | planned | in-progress | done

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [{ id: Date.now(), ...task }, ...prev]);
  };

  const updateTask = (id, updatedFields) => {
    setTasks((prev) => prev.map(t => t.id === id ? { ...t, ...updatedFields } : t));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "all" || (
      filter === "planned" && t.status === "Planned"
    ) || (
      filter === "in-progress" && t.status === "In Progress"
    ) || (
      filter === "done" && t.status === "Done"
    );
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="app-shell">
      <Header />
      <main className="container">
        <AddTask onAdd={addTask} />
        <SearchFilter
          query={query}
          setQuery={setQuery}
          filter={filter}
          setFilter={setFilter}
        />
        <TaskList tasks={filteredTasks} onUpdate={updateTask} onDelete={deleteTask} />
      </main>
    </div>
  );
}
