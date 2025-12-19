const INITIAL_STATE = {
    tasks: [
        { id: 1, nom: "Apprendre Redux", etat: false }, 
        { id: 2, nom: "Créer une Todo List", etat: true },
        { id: 3, nom: "Comprendre les reducers", etat: false },
    ]
};

export default function TodoReduce(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        case "TOGGLE_TASK":
            const newTasks = state.tasks.map(task => {
                if (task.id === action.payload) {
                    return {
                        id: task.id,
                        nom: task.nom,
                        etat: !task.etat
                    };
                } else {
                    return task;
                }
            });

            return {
                ...state,
                tasks: newTasks
            };

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        default:
            return state;
    }
}
