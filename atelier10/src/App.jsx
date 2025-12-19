import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
    return (
        <div className="app-shell">
            <header className="header">
                <div className="header-inner">
                    <h1>Todo List Redux</h1>
                    <p className="tagline">Gérez vos tâches simplement</p>
                </div>
            </header>

            <TodoForm />
            <TodoList />
        </div>
    );
}
