import homeConnectedV2 from "../images/gamenest/home-connected-v2.png";
import homeConnectedV1 from "../images/gamenest/home-auth.png";
import gamesFinderV2 from "../images/gamenest/games-finder-v2.png";
import gamesFinderV1 from "../images/gamenest/games-finder.png";
import gameDetailsV2 from "../images/gamenest/game-details-v2.png";
import gameDetailsV1 from "../images/gamenest/games-details-1.png";
import collectionManageV2 from "../images/gamenest/collection-manage-v2.png";
import collectionManageV1 from "../images/gamenest/add-to-collection.png";

import { Diff } from "../components/ui/diff/Diff";
export const GameNest = () => {
  const homeConnected = [
    {
      img: homeConnectedV1,
      alt: "home-connected-v1",
    },
    {
      img: homeConnectedV2,
      alt: "home-connected-v2",
    },
  ];

  const gamesFinder = [
    {
      img: gamesFinderV1,
      alt: "games-finder-v1",
    },
    {
      img: gamesFinderV2,
      alt: "games-finder-v2",
    },
  ];

  const gameDetails = [
    {
      img: gameDetailsV1,
      alt: "game-details-v1",
    },
    {
      img: gameDetailsV2,
      alt: "game-details-v2",
    },
  ];

  const collectionManage = [
    {
      img: collectionManageV1,
      alt: "collection-manage-v1",
    },
    {
      img: collectionManageV2,
      alt: "collection-manage-v2",
    },
  ];

  return (
    <div className="bg-gray-400">
      <h1 className="text-black text-center text-3xl">
        GameNest - Actualizaciones (mover el botón a la derecha para ver los
        cambios)
      </h1>
      <h3 className=" text-center text-xl text-blue-800">
        Inicio - conectado (mover el botón a la derecha para ver los cambios)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Diff imgBefore={homeConnected[0]} imgAfter={homeConnected[1]} />
        <Diff imgBefore={gamesFinder[0]} imgAfter={gamesFinder[1]} />
        <Diff imgBefore={gameDetails[0]} imgAfter={gameDetails[1]} />
        <Diff imgBefore={collectionManage[0]} imgAfter={collectionManage[1]} />
      </div>
    </div>
  );
};
