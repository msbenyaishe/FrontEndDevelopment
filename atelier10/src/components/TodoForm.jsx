import { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoForm() {
    const [nom, setNom] = useState("");
    const dispatch = useDispatch();

    const addTask = (e) => {
        e.preventDefault();

        if (nom.trim() === "") return;

        const newTask = {
            id: Date.now(),
            nom: nom,
            etat: false
        };

        dispatch({ type: "ADD_TASK", payload: newTask });
        setNom("");
    };

    return (
        <div className="card add-task">
            <form onSubmit={addTask} className="row">
                <input
                    type="text"
                    placeholder="Nouvelle tâche..."
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />

                <button type="submit" className="btn">
                    Ajouter
                </button>
            </form>
        </div>
    );
}
