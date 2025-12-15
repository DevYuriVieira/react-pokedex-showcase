const TypeBadge = ({ type }) => {
  const colors = {
    grass: "bg-green-500", // No CSS é classe, aqui usamos só pra referência 
    poison: "bg-purple-500",
    fire: "bg-orange-500",
    flying: "bg-sky-400",
    water: "bg-blue-500",
    bug: "bg-lime-500",
    normal: "bg-gray-400",
  };

  // Garante que o tipo seja minúsculo para bater com a classe CSS do App.css
  const typeClass = type.toLowerCase();

  return (
    <span className={`type-badge ${typeClass}`}>
      {type}
    </span>
  );
};

export default TypeBadge;




