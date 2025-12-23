import { useSelector } from "react-redux";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const tasks = useSelector((state) => state.todo.tasks);
    const [search, setSearch] = useState("");

    const filteredTasks = tasks.filter((task) =>
        task.nom.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="card">
            <h2>Liste des tâches</h2>

            <input
                type="text"
                placeholder="Rechercher une tâche..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: "14px" }}
            />

            {filteredTasks.length === 0 ? (
                <p>Aucune tâche trouvée.</p>
            ) : (
                filteredTasks.map((task) => (
                    <TodoItem key={task.id} task={task} />
                ))
            )}
        </div>
    );
}
