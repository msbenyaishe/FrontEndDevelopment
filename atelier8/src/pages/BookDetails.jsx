import { useParams } from 'react-router-dom';

function BookDetails() {
    const {genre, id} = useParams();

    return (
        <div className="container-fluid mt-4">
            <h1>Détails du Livre</h1>

            <div className='card mt-3'>
                <div className='card-body'>
                    <p>
                        <strong>Genre :</strong> {genre}
                    </p>
                    <p>
                        <strong>ID :</strong> {id}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookDetails;