import React, { useState, useRef, useEffect } from "react";

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const save = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    onUpdate(task.id, { title: trimmed, status });
    setEditing(false);
  };

  return (
    <div className="card task-item">
      <div className="task-main">
        {editing ? (
          <input
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") save(); }}
          />
        ) : (
          <div>
            <h3 className={task.status === "Done" ? "done" : ""}>{task.title}</h3>
            <small className="muted">Created: {new Date(task.createdAt).toLocaleString()}</small>
          </div>
        )}
      </div>

      <div className="task-actions">
        <select value={status} onChange={(e) => { setStatus(e.target.value); onUpdate(task.id, { status: e.target.value }); }}>
          <option value="Planned">Planned</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        {editing ? (
          <>
            <button className="btn small" onClick={save}>Save</button>
            <button className="btn ghost small" onClick={() => { setEditing(false); setTitle(task.title); }}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn small" onClick={() => setEditing(true)}>Edit</button>
            <button className="btn danger small" onClick={() => onDelete(task.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
