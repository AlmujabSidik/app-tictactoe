import ButtonGame from "./ButtonGame";
import GameBoard from "./GameBoard";

const Layout = () => {
  return (
    <section className="flex items-center min-h-screen w-full justify-center gap-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <GameBoard value={1} />
        <GameBoard value={2} />
        <GameBoard value={3} />
        <GameBoard value={4} />
        <GameBoard value={5} />
        <GameBoard value={6} />
        <GameBoard value={7} />
        <GameBoard value={8} />
        <GameBoard value={9} />
      </section>
      <section className="flex flex-col gap-4">
        <div>
          <h1>Start Over</h1>
          <ButtonGame>Start Over</ButtonGame>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <h1>History</h1>
          <ButtonGame>Langkah #1</ButtonGame>
          <ButtonGame>Langkah #2</ButtonGame>
          <ButtonGame>Langkah #3</ButtonGame>
        </div>
      </section>
    </section>
  );
};

export default Layout;
