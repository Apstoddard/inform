import React, { useRef, useState } from "react";

function Pin({ size, position, hover }) {
  const ref = useRef();
  const [length, width, height] = size;
  const [x, y, z] = position;
  return (
    <mesh position={[x, y, height / 2 + z]} ref={ref} onPointerOver={hover}>
      <boxGeometry args={[length, width, height]} />
      <meshStandardMaterial color={"lightgrey"} />
    </mesh>
  );
}

export default Pin;
