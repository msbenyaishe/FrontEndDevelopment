import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/todoSlice";

export default function TodoItem({ task }) {
    const dispatch = useDispatch();

    return (
        <div className="task-item">
            <div className="task-left">
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.etat}
                    onChange={() => dispatch(toggleTask(task.id))}
                />
                <span
                    className={`task-text ${task.etat ? 'done' : ''}`}
                    style={{
                        textDecoration: task.etat ? "line-through" : "none"
                    }}
                >
                    {task.nom}
                </span>
            </div>

            <div className="task-actions">
                <button
                    className="btn small danger"
                    onClick={() => dispatch(deleteTask(task.id))}
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
}
