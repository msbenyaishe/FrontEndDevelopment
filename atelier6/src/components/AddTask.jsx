import React, { useState, useRef, useEffect } from "react";

const defaultStatus = "Planned";

export default function AddTask( {onAdd} ) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState(defaultStatus);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const submit = (e) => {
        e.preventDefault();
        const trimmed = title.trim();
        if (!trimmed) return;
        onAdd({
            title: trimmed, status, notes: "", createdAt: new Date().toISOString()
        });
        setTitle("");
        setStatus(defaultStatus);
        inputRef.current?.focus();
    }

    return (
        <form className="card add-task" onSubmit={submit}>
            <div className="row">
                <input
                    ref={inputRef}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task..."
                    aria-label="New task title"
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    aria-label="Status"
                >
                    <option value="Planned">Planned</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>

                <button type="submit" className="btn">Add</button>
            </div>
        </form>
    );
}