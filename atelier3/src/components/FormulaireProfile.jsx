import React, { useState } from "react";

function FormulaireProfil({ajouterProfile}) {
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const [profession, setProfession] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (Event) => {
        Event.preventDefault();
        const nouveauProfil = {nom, age, profession, image};
        ajouterProfile(nouveauProfil);
        setNom('');
        setAge('');
        setProfession('');
        setImage('');
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 p-4 bg-white mx-auto" style={{ maxWidth: "500px", border: "1px solid #e5e7eb" }}>
            <label>Nom : </label>
            <input type="text" className="form-control" value={nom} onChange={(e) => setNom(e.target.value)} />
            <label>Age : </label>
            <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
            <label>Profession : </label>
            <input type="text" className="form-control" value={profession} onChange={(e) => setProfession(e.target.value)} />
            <label>Image URL : </label>
            <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
            <button type="submit" className="btn btn-primary">Ajouter Profil</button>
        </form>
    );
}

export default FormulaireProfil;