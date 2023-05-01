import Board from "./components/Board";
import UserPanel from "./components/UserPanel";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import "./App.css";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [grid, setGrid] = useState();
  const [persist, setPersist] = useState(false);

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

  const wait = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };

  const updateGrid = async (row, col) => {
    socket.emit("grid-add", row, col);
    if (!persist) {
      await wait(1000);
      socket.emit("grid-subtract", row, col);
    }
  };

  const resetGrid = () => {
    socket.emit("reset-grid");
  };

  return (
    <main className="main">
      <section className="userPanel">
        <UserPanel
          persist={persist}
          setPersist={setPersist}
          resetGrid={resetGrid}
        />
      </section>
      <section className="informPanel">
        {isConnected && grid ? (
          <Board
            grid={grid}
            updateGrid={updateGrid}
            length={length}
            width={width}
            size={size}
            gap={gap}
          />
        ) : (
          <span className="informPanelLoading">Loading...</span>
        )}
      </section>
    </main>
  );
}
