import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todoSlice";

export default function TodoForm() {
    const [nom, setNom] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nom.trim() === "") return;

        dispatch(
            addTask({
                id: Date.now(),
                nom,
                etat: false
            })
        );

        setNom("");
    };

    return (
        <div className="card add-task">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <input
                        type="text"
                        placeholder="New Task..."
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />

                    <button className="btn" type="submit">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
}
