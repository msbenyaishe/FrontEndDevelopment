import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks : [
        { id: 1, nom: "Apprendre Redux Toolkit", etat: false }, 
        { id: 2, nom: "Créer une Todo List", etat: true }
    ]
}

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTask : (state, action) => {
            state.tasks.push(action.payload);
        },

        toggleTask : (state, action) => {
            const id = action.payload;
            const task = state.tasks.find((t) => t.id === id);
            if (task) task.etat = !task.etat;
        },

        deleteTask : (state, action) => {
            const id = action.payload;
            state.tasks = state.tasks.filter((t) => t.id !== id);
        }
    }
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;