import { configureStore } from "@reduxjs/toolkit";
import TodoReduce from "../reducers/TodoReduce";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("tasksState");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Failed to load state", e);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("tasksState", serializedState);
    } catch (e) {
        console.warn("Failed to save state", e);
    }
};

const persistedState = loadState();

const store = configureStore({
    reducer: TodoReduce,
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
