import Board from "./components/Board";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import "./App.css";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [grid, setGrid] = useState();

  useEffect(() => {
    const onConnect = () => {
      console.log("Connected!");
      setIsConnected(true);
      socket.emit("pull-grid");
    };

    const onDisconnect = () => {
      console.log("Disconnected");
      setIsConnected(false);
    };

    const onUpdateGrid = (grid) => {
      setGrid(grid);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("update-grid", onUpdateGrid);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("update-grid", onUpdateGrid);
    };
  }, []);

  const length = 20;
  const width = 20;
  const size = 1.5;
  const gap = 0.1;

  const updateGrid = (row, col) => {
    socket.emit("grid-add", row, col);
    setTimeout(() => {
      socket.emit("grid-subtract", row, col);
    }, 1000);
  };

  return (
    <main className="main">
      <section className="userPanel"></section>
      <section className="informPanel">
        {grid ? (
          <Board
            grid={grid}
            updateGrid={updateGrid}
            length={length}
            width={width}
            size={size}
            gap={gap}
          />
        ) : (
          <span>Loading...</span>
        )}
      </section>
    </main>
  );
}
