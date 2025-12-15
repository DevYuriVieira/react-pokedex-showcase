import { useState } from "react";
import CardContainer from "./components/CardContainer";
import { pokemonList } from "./Data/pokemonData";
import pokedexLogo from './assets/image/Pokedex.png';
import "./App.css";

export default function App() {
  const [pokemons] = useState(pokemonList);
  const [busca, setBusca] = useState("");

  const pokemonsFiltrados = pokemons.filter((p) => 
    p.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="app-background">
      <header className="header">
        <img 
          src={pokedexLogo} 
          alt="Logo Pokédex" 
          className="header-logo" 
        />
        
        <h1 className="title">POKÉDEX</h1>
        <p className="subtitle">Abilities Database</p>
      </header>

      <div className="pokedex-wrapper">
        <input
          type="text"
          className="search-box"
          placeholder="Search Pokémon..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <CardContainer pokemons={pokemonsFiltrados} />
      </div>
    </div>
  );
}
