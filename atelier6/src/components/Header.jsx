import React from "react";
import Logo from "../assets/todo-logo2.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="container header-inner">
                <div className="brand">
                    <img src={Logo} alt="PlanifyToDo logo" className="logo" />
                    <h1>PlanifyToDo</h1>
                </div>
                <p className="tagline">Organize your time — plan, do, finish.</p>
            </div>
        </header>
    )
}