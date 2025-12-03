import React, { useEffect, useState } from "react";

export default function Comp() {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        alert("Le composant est monté ou les dépendances ont changé !");
    }, [counter]);

    return (
        <div>
            <h1>Exemple de useEffect</h1>
            <p>Valeur du compteur : {counter}</p>
            <button onClick={() => setCounter(counter+1)}>Incrementer le compteur</button>
        </div>
    )
}