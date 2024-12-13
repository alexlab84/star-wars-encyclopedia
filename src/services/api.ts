import axios from 'axios';

const apiUrl = "https://swapi.dev/api/people/";

const fetchCharacters = async (page: number, query: string) => {
  try {
    const response = await axios.get(`${apiUrl}?page=${page}&search=${query}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
export default fetchCharacters;