const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { create, all } = require("mathjs");

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

const size = 31;

const createNewGrid = () => {
  const grid = [];
  for (let y = 0; y < size; y++) {
    const row = new Array(size).fill(0);
    grid.push(row);
  }
  return grid;
};

const math = create(all);

const limitedEvaluate = math.evaluate;

math.import(
  {
    import: function () {
      throw new Error("Function import is disabled");
    },
    createUnit: function () {
      throw new Error("Function createUnit is disabled");
    },
    evaluate: function () {
      throw new Error("Function evaluate is disabled");
    },
    parse: function () {
      throw new Error("Function parse is disabled");
    },
    simplify: function () {
      throw new Error("Function simplify is disabled");
    },
    derivative: function () {
      throw new Error("Function derivative is disabled");
    },
  },
  { override: true }
);

const applyFuncToGrid = (functionStr) => {
  grid = createNewGrid();
  const f = limitedEvaluate(functionStr);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      grid[y][x] = f(x - Math.floor(size / 2), y - Math.floor(size / 2));
    }
  }
};

let grid = createNewGrid();

io.on("connection", (socket) => {
  console.log("Connected Received from " + socket.id);
  socket.on("reset-grid", () => {
    console.log("Reset Grid");
    grid = createNewGrid();
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

  socket.on("grid-func", (functionStr) => {
    console.log("Function " + functionStr);
    applyFuncToGrid(functionStr);
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
