import { useState, } from 'react';

import Header from './components/Header';

import './styles/App.scss'

function App() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
