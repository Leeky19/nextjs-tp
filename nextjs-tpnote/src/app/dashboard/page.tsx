export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Partie gauche - occupe 2/3 de la largeur */}
      <div className="w-2/3 h-full">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Create</button>
        {/* Le reste du contenu de la page de tableau de bord */}
      </div>
      {/* Partie droite - occupe 1/3 de la largeur */}
      <div className="w-1/3 h-full bg-yellow-800">
        {/* Contenu de la partie droite */}
      </div>
    </div>
  );
}
