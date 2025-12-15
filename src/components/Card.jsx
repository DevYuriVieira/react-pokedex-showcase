import TypeBadge from './TypeBadge';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <span className="pokemon-id">
        #{String(pokemon.id).padStart(3, '0')}
      </span>

      <img 
        src={pokemon.image} 
        alt={pokemon.name} 
        className="pokemon-img"
      />

      <h2 className="pokemon-name">{pokemon.name}</h2>

      <div className="types">
        {pokemon.types.map((type, index) => (
          <TypeBadge key={index} type={type} />
        ))}
      </div>

      <div className="ability-title">ABILITIES</div>
      <ul className="ability-list">
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;



