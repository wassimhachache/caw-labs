import { useState } from "react";

export default function Exo1() {
  const [clicked, setClicked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [lastButton, setLastButton] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Exercise 1</h2>

      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}

      <hr />

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>{toggle ? "Clicked" : "Not Clicked"}</p>

      <hr />

      <button onClick={() => setLastButton("Button 1")}>Button1</button>
      <button onClick={() => setLastButton("Button 2")}>Button2</button>
      <button onClick={() => setLastButton("Button 3")}>Button3</button>
      <p>{lastButton ? `${lastButton} was clicked` : ""}</p>

      <hr />

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}
