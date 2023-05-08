import React, { useRef } from "react";

function Pin({ size, position, hover }) {
  const ref = useRef();
  const [length, width, height] = size;
  const [x, y, z] = position;

  let currentFace = null;

  const resetCurrentFace = () => {
    currentFace = null;
  };

  const checkHoverFace = (e) => {
    const newFace = e.face.materialIndex;
    if (newFace === 4 && currentFace !== 4 && hover) {
      hover();
    }
    currentFace = newFace;
  };

  return (
    <mesh
      position={[x, y, height / 2 + z]}
      ref={ref}
      onPointerOver={hover}
      /*onPointerMove={checkHoverFace}
      onPointerLeave={resetCurrentFace}*/
    >
      <boxGeometry args={[length, width, height]} />
      {[...Array(6)].map((_, index) => (
        <meshLambertMaterial
          attach={`material-${index}`}
          key={index}
          color={"lightgrey"}
        />
      ))}
    </mesh>
  );
}

export default Pin;
