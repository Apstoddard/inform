import Board from "./components/Board";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import "./App.css";

export default function Viewer() {
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

  const length = 31;
  const width = 31;
  const size = 1;
  const gap = 0.1;

  return (
    <main className="main" style={{ backgroundColor: "black" }}>
      {isConnected && grid ? (
        <Board
          grid={grid}
          updateGrid={(row, col) => null}
          length={length}
          width={width}
          size={size}
          gap={gap}
          fixed
        />
      ) : (
        <span className="informPanelLoading">Loading...</span>
      )}
    </main>
  );
}
