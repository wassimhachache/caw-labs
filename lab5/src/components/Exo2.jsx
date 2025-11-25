import { useState } from "react";

function DisplayTab({ table }) {
  return (
    <ul>
      {table.map((e, i) => (
        <li key={i}>Element {i + 1} is: {e}</li>
      ))}
    </ul>
  );
}

export default function Exo2() {
  const tab1 = ["hello", "world", "from", "react"];
  const [tab3, setTab3] = useState([...tab1]);

  return (
    <div>
      <h2>Exercise 2</h2>

      <ul>
        {tab1.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>

      <hr />

      <ul>
        {tab1.map((e, i) => (
          <li key={i}>Element {i + 1} is: {e}</li>
        ))}
      </ul>

      <hr />

      <ul>
        {tab3.map((e, i) => (
          <li
            key={i}
            onClick={() => setTab3(tab3.filter((_, index) => index !== i))}
            style={{ cursor: "pointer" }}
          >
            Element {i + 1} is: {e}
          </li>
        ))}
      </ul>

      <hr />

      <DisplayTab table={["Apple", "Banana", "Orange"]} />
      <DisplayTab table={["A", "B", "C", "D"]} />
    </div>
  );
}
