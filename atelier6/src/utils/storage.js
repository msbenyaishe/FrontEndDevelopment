const KEY = "planify_tasks_v1";

export function loadTasks() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      // sample default tasks
      return [
        { id: 1, title: "Buy groceries", status: "Planned", notes: "", createdAt: new Date().toISOString() },
        { id: 2, title: "Read for 30 minutes", status: "In Progress", notes: "", createdAt: new Date().toISOString() },
        { id: 3, title: "Submit report", status: "Done", notes: "", createdAt: new Date().toISOString() }
      ];
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load tasks", e);
    return [];
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error("Failed to save tasks", e);
  }
}
