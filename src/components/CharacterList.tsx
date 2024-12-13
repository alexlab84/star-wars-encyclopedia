type Character = {
    name: string;
    height: string;
    gender: string;
}

type CharacterListProps = {
    characters: Character[];
  };
  

const CharacterList = ({characters}: CharacterListProps) => {
    return (
        <div>
            {characters.map((character, index) => (
                <div key={index}>
                    <h2>{character.name}</h2>
                    <p>Height: {character.height}</p>
                    <p>Gender: {character.gender}</p>
                </div>
            ))}
        </div>
    )
};

export default CharacterList;
