const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const createNewGrid = (width, height) => {
  const grid = [];
  for (let y = 0; y < height; y++) {
    const row = new Array(width).fill(0);
    grid.push(row);
  }
  return grid;
};

let grid = createNewGrid(30, 30);

io.on("connection", (socket) => {
  console.log("Connected Received from " + socket.id);
  socket.on("reset-grid", () => {
    console.log("Reset Grid");
    grid = createNewGrid(30, 30);
    io.emit("update-grid", grid);
  });

  socket.on("pull-grid", () => {
    console.log("Pull Grid");
    socket.emit("update-grid", grid);
  });

  socket.on("grid-add", (row, col) => {
    console.log("Add Grid at (" + row + ", " + col + ")");
    grid[row][col] += 1;
    io.emit("update-grid", grid);
  });

  socket.on("grid-subtract", (row, col) => {
    console.log("Subtract Grid at (" + row + ", " + col + ")");
    grid[row][col] -= 1;
    io.emit("update-grid", grid);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
    socket.disconnect();
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
