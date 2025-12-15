import Card from './Card';

const CardContainer = ({ pokemons }) => {
  
  if (pokemons.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
        <p>Nenhum Pokémon encontrado...</p>
      </div>
    );
  }

  return (
    <div className="cards-grid">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default CardContainer;



