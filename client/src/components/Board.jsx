import { Canvas, useThree } from "@react-three/fiber";
import Pin from "./Pin";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 10;
    controls.maxDistance = 60;
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
    <Canvas camera={{ position: [0, -40, 30] }}>
      {!fixed && <CameraController />}
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={0.3} />
      <Pin
        size={[
          length * size + (length * size - 1) * gap,
          width * size + (width * size - 1) * gap,
          2,
        ]}
        position={[-size / 2, -size / 2, -2]}
      />
      {grid.map((row, rowIndex) =>
        row.map((box, colIndex) => (
          <Pin
            size={[size, size, box * 2 + 2]}
            position={[
              -(length * size + (length * size - 1) * gap) / 2 +
                colIndex * size +
                colIndex * size * gap,
              -(width * size + (width * size - 1) * gap) / 2 +
                rowIndex * size +
                rowIndex * size * gap,
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
