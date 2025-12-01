import React from "react";
import CarteProfile from "./carteProfile";

function ListeProfiles({ profiles, supprimerProfil }) {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {profiles.map((profil, index) => (
                <div key={index}>
                    <CarteProfile 
                        nom={profil.nom}
                        age={profil.age}
                        profession={profil.profession}
                        image={profil.image}
                    />
                    <button onClick={() => supprimerProfil(index)} className="btn btn-danger">
                        Supprimer
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ListeProfiles;
