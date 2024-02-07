import { PlusIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Partie gauche - occupe 2/3 de la largeur */}
      <div className="w-2/3 h-full">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-1 px-3 rounded-full flex items-center">
          <PlusIcon className="h-5 w-5 mr-1" /> Create
        </button>
        {/* Le reste du contenu de la page de tableau de bord */}
      </div>
      {/* Partie droite - occupe 1/3 de la largeur */}
      <div className="w-1/3 h-full bg-yellow-800">
        {/* Contenu de la partie droite */}
      </div>
    </div>
  );
}
