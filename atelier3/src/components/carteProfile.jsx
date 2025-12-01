import "./style.css"

function CarteProfile({nom, age, profession, image}) {
    return (
        <div className="card" style={{width: "18rem", margin: "1rem"}}>
            <img src={image} className="card-img-top" alt={nom} />
            <div className="card-body">
                <h5 className="card-title">{nom}</h5>
                <p className="card-text">Age : {age}</p>
                <p className="card-text">Profession : {profession}</p>
            </div>
        </div>
    )
}

export default CarteProfile;