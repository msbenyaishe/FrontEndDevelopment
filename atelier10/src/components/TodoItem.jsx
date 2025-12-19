import { useDispatch } from "react-redux";

export default function TodoItem({ task }) {
    const dispatch = useDispatch();

    const toggleTask = () => {
        dispatch({ type: "TOGGLE_TASK", payload: task.id });
    };

    const deleteTask = () => {
        dispatch({ type: "DELETE_TASK", payload: task.id });
    };

    return (
        <div className="task-item">
            <div className="task-main">
                <h3
                    style={{
                        textDecoration: task.etat ? "line-through" : "none"
                    }}
                >
                    {task.nom}
                </h3>

                <p className="muted">
                    {task.etat ? "Terminée" : "En cours"}
                </p>
            </div>

            <div className="task-actions">
                <button
                    className="btn small"
                    onClick={toggleTask}
                >
                    {task.etat ? "Annuler" : "Terminer"}
                </button>

                <button
                    className="btn small danger"
                    onClick={deleteTask}
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
}
