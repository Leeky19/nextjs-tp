import { PlusIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Partie gauche - occupe 2/3 de la largeur */}
      <div className="w-2/3 h-full flex flex-col justify-between" style={{ background: 'rgba(0, 0, 0, 0)' }}>
        <div>
          <div className="flex justify-between items-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-1 px-3 rounded-full flex items-center mt-4">
              <PlusIcon className="h-5 w-5 mr-1" /> Create
            </button>
            {/* Liste déroulante utilisateur */}
            <div className="relative">
              <button className="flex items-center text-sm font-semibold text-white rounded-full focus:outline-none mt-4">
                John Doe {/* Texte à gauche du cercle rouge */}
                <div className="h-6 w-6 rounded-full bg-red-500 ml-2"></div> {/* Cercle rouge à droite du texte */}
              </button>
              {/* Contenu de la liste déroulante */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                {/* Contenu de la liste déroulante */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partie droite - occupe 1/3 de la largeur */}
      <div className="w-1/3 h-full bg-yellow-800">
        {/* Contenu de la partie droite */}
      </div>
    </div>
  );
}
