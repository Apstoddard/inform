import { Canvas, useThree } from "@react-three/fiber";
import Pin from "./Pin";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 20;
    controls.maxDistance = 100;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default function Board({
  grid,
  updateGrid,
  length,
  width,
  size,
  gap,
  fixed = false,
}) {
  return (
    <Canvas camera={{ position: [0, -40, 30] }} style={{ cursor: "crosshair" }}>
      {!fixed && <CameraController />}
      <pointLight position={[0, 100, 100]} />
      <ambientLight intensity={0.3} />
      <Pin
        size={[
          length * size + (length * size - 1.5) * gap,
          width * size + (width * size - 1.5) * gap,
          2,
        ]}
        position={[0, 0, -2]}
      />
      {grid.map((row, rowIndex) =>
        row.map((box, colIndex) => (
          <Pin
            size={[size, size, (box < 16 ? (box >= 0 ? box : 0) : 16) + 2]}
            position={[
              -(length * size + (length * size - 1) * gap) / 2 +
                colIndex * size +
                colIndex * size * gap +
                size / 2,
              -(width * size + (width * size - 1) * gap) / 2 +
                rowIndex * size +
                rowIndex * size * gap +
                size / 2,
              0,
            ]}
            key={`${rowIndex} ${colIndex}`}
            hover={() => updateGrid(rowIndex, colIndex)}
          />
        ))
      )}
    </Canvas>
  );
}
