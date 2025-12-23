import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

/* Load state from localStorage */
const loadState = () => {
  try {
    const data = localStorage.getItem("todoState");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

/* Save state to localStorage */
const saveState = (state) => {
  try {
    localStorage.setItem("todoState", JSON.stringify(state.todo));
  } catch {}
};

const preloadedState = {
  todo: loadState()
};

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
  preloadedState
});

/* Persist on every change */
store.subscribe(() => {
  saveState(store.getState());
});
