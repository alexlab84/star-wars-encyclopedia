import { useEffect, useState, } from 'react';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import fetchCharacters from './services/api';
import Pagination from './components/Pagination'; 
import './styles/App.scss'

type Character = {
  name: string;
  height: string;
  gender: string;
};


function App() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // characters contiene la lista de personajes obtenida de la API.
  const [characters, setCharacters] = useState<Character[]>([]); 
  // totalPages se inicializa a 1 y se actualiza según la estructura de la API.
  const [totalPages, setTotalPages] = useState(1);


 
  

  // Hook useEffect que se ejecuta cada vez que cambian currentPage o query
  useEffect(() => {
     // Llama a fetchCharacters con la página actual y la consulta de búsqueda (query)
    const fetchData = async () => {
      const data = await fetchCharacters(currentPage, query);
      // Actualiza el estado con los resultados devueltos.
      setCharacters(data);
      // Actualizamos el total de páginas basándonos en los resultados de la API.
      setTotalPages(9); // swapi tiene 9 páginas de personajes
    };

    fetchData();
  }, [currentPage, query]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setCurrentPage(1);  // Reinicia a la primera página en cada nueva búsqueda
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1>Star Wars Encyclopedia</h1>
      <Header onSearch={handleSearch} />
      <CharacterList characters={characters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default App
