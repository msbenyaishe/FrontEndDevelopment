import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onUpdate, onDelete }) {
    if (!tasks.length) {
        return <p className="muted">No tasks found. Add your first task!</p>
    }

    return (
        <section className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </section>
    )
}