import Board from "./components/Board";
import UserPanel from "./panels/UserPanel";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import "./App.css";
import AboutPanel from "./panels/AboutPanel";
import InteractPanel from "./panels/InteractPanel";
import SoloPanel from "./panels/SoloPanel";
import CollabPanel from "./panels/CollabPanel";
import TangibleTechPanel from "./panels/TangibleTechPanel";
import RadicalAtomsPanel from "./panels/RadicalAtomsPanel";
import HowToPanel from "./panels/HowToPanel";
import Solo100Percent from "./challenges/Solo100Percent";
import SoloGraph from "./challenges/SoloGraph";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [grid, setGrid] = useState();
  const [persist, setPersist] = useState(false);
  const [state, setState] = useState("home");

  useEffect(() => {
    switch (state) {
      case "solo100Percent":
        resetGrid();
        setPersist(true);
        break;
      default:
        setPersist(false);
        break;
    }
  }, [state]);

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

  const applyFuncToGrid = async (functionStr) => {
    socket.emit("grid-func", functionStr);
  };

  const renderPage = (key) => {
    switch (key) {
      case "home":
        return <UserPanel setState={setState} />;
      case "aboutMenu":
        return <AboutPanel setState={setState} />;
      case "interactMenu":
        return <InteractPanel setState={setState} />;
      case "soloMenu":
        return <SoloPanel setState={setState} />;
      case "collabMenu":
        return <CollabPanel setState={setState} />;
      case "tangibleTechInfo":
        return <TangibleTechPanel setState={setState} />;
      case "radicalAtomsInfo":
        return <RadicalAtomsPanel setState={setState} />;
      case "howToInfo":
        return <HowToPanel setState={setState} />;
      case "solo100Percent":
        return (
          <Solo100Percent setState={setState} grid={grid} reset={resetGrid} />
        );
      case "soloGraph":
        return (
          <SoloGraph
            setState={setState}
            grid={grid}
            reset={resetGrid}
            applyFuncToGrid={applyFuncToGrid}
          />
        );
      default:
        return <UserPanel setState={setState} />;
    }
  };

  return (
    <main className="main">
      <section className="userPanel">{renderPage(state)}</section>
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
