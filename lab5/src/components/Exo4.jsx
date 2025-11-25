import { useState } from "react";

export default function Exo4() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const addDiv = (e) => {
    e.preventDefault();
    setBoxes([...boxes, { height, width, color }]);
    setHeight("");
    setWidth("");
    setColor("");
  };

  return (
    <div>
      <h2>Exercise 4</h2>

      <form onSubmit={addDiv}>
        <input
          type="number"
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <button type="submit">Add Div</button>
      </form>

      {boxes.map((b, i) => (
        <div
          key={i}
          style={{
            height: b.height + "px",
            width: b.width + "px",
            backgroundColor: b.color,
            marginTop: "10px"
          }}
        ></div>
      ))}
    </div>
  );
}
