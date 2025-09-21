import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="2">
      <h2>Here is</h2>
      <h2>
        <Ganti />
      </h2>
    </div>
  );
}

function Counter() {
  const [text, setText] = useState("");

  return (
    <div className="1">
      <label htmlFor="99">Omagaa </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Isi nih"
      />
      <h2 id="aku">{text}</h2>
    </div>
  );
}

function Ganti() {
  const [ison, setison] = useState(true);

  return (
    <div className="">
      <button onClick={() => setison(!ison)}>{ison ? "ON" : "OFF"}</button>
    </div>
  );
}

// function Halo(prop) {
//   return (
//     <div className="1">
//       <h2>Halo {prop.nama}, kamu kelihatan unik ya</h2>
//     </div>
//   );
// }

export default App;
