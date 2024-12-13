import { useState, } from 'react';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import fetchCharacters from './services/api';
import './styles/App.scss'

type Character = {
  name: string;
  height: string;
  gender: string;
};


function App() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  

  const handleSearch = (query: string) => {
    setQuery(query);
    setCurrentPage(1);  // Reset to first page on new search
  };

  return (
    <>
      <h1>Hola</h1>
      <Header onSearch={handleSearch} />
    </>
  )
}

export default App
