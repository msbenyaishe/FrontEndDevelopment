import CarteProfile from "./CarteProfil";

function ListeProfiles() {
    const profils = [
        {
            nom: 'Alice Martin',
            age: 25,
            profession: 'Développeur Web',
            ville: 'Paris',
            image: './images/male.png'
        },
        {
            nom: 'Lory Francois',
            age: 30,
            profession: 'Designer UX/UI',
            ville: 'Lyon',
            image: './images/female.png'
        },
        {
            nom: 'Charlie Bernard',
            age: 28,
            profession: 'Marketeur Digital',
            ville: 'Marseille',
            image: './images/male2.png'
        },
        {
            nom: 'Diana Laurent',
            age: 35,
            profession: 'Gestionnaire de Projet',
            ville: 'Toulouse',
            image: './images/female2.png'
        }
    ];

    return (
        <div className="d-flex justify-content-center" style={{ flexWrap: "nowrap" }}>
            {profils.map((p, index) => (
                <CarteProfile 
                    key={index}
                    nom={p.nom}
                    age={p.age}
                    profession={p.profession}
                    ville={p.ville}
                    image={p.image}
                />
            ))}
        </div>
    );
}

export default ListeProfiles;