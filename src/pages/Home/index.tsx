import React, { useState, useEffect } from 'react';
import TitlePage from '../../components/TitlePage';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import CharacterList from './CharacterList'; // Importa o componente de lista de personagens
// import Pagination from './Pagination'; // Importa o componente de paginação
import { getAllPerson } from '../../store/modules/PersonSlice';

export const Home: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();

  const people = useAppSelector((state) => state.person);

  useEffect(() => {
    dispatch(getAllPerson(1));
  }, []);

  /* useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const fetchCharacters = (page: number) => {
    // Função para buscar personagens da API
  };
*/
  const handlePrevPage = () => {
    // Função para ir para a página anterior
  };

  const handleNextPage = () => {
    // Função para ir para a próxima página
  };

  /* const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     Função para atualizar o estado do termo de busca
  }; */

  const handleSearchClick = () => {
    // Função para reiniciar a busca na primeira página
  };

  return (
    <div>
      {/* <TitlePage title="Home" />
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      <button onClick={handleSearchClick}>Buscar</button>
      <CharacterList characters={characters} />
      <Pagination currentPage={currentPage} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} /> */}
    </div>
  );
};
