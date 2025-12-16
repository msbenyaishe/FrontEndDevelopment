import { Link } from 'react-router-dom';

function Books() {
    const books = [
    { id: 1, title: 'React Basics', genre: 'technology' },
    { id: 2, title: 'JavaScript Essentials', genre: 'technology' },
    { id: 3, title: 'Cooking Made Easy', genre: 'lifestyle' }
  ];

  return (
    <div className="container-fluid mt-4">
        <h1 className='mb-3'>Liste des Livres</h1>

        <ul className='list-group'>
            {books.map((book) => (
                <li key={book.id} className='list-group-item'>
                    <Link to={`/books/${book.genre}/${book.id}`}>
                        {book.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Books;