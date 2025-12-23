import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
    return (
        <div className="app-shell">
            <header className="header">
                <div className="header-inner">
                    <h1>Todo List Redux Toolkit</h1>
                    <p className="tagline">Organise your tasks easily</p>
                </div>
            </header>

            <TodoForm />
            <TodoList />
        </div>
    );
}
