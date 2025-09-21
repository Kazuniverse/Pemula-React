import { useState } from "react";

function MiniCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  function tambah() {
    setResult(Number(num1) + Number(num2));
  }

  function kali() {
    setResult(Number(num1) * Number(num2));
  }

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Angka 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Angka 2"
      />
      <br />
      <button onClick={tambah}>Tambah</button>
      <button onClick={kali}>Kali</button>
      {result !== null && <p>Hasil: {result}</p>}
    </div>
  );
}

export default MiniCalculator;
