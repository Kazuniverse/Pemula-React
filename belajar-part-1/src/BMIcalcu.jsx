import { useState } from "react";
import "./App.css";

function KalkulatorBMI() {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState("");

  function Hasil() {
    setHasil(Number(berat) / Number(tinggi * 2));
  }

  return (
    <div>
      <input
        type="number"
        name="siBerat"
        id="1"
        value={berat}
        onChange={(e) => setBerat(e.target.value)}
        placeholder="Masukkan berat (Kg)"
        required
      />
      <br />
      <input
        type="number"
        name="siTinggi"
        id="2"
        value={tinggi}
        onChange={(e) => setTinggi(e.target.value)}
        placeholder="Masukkan Tinggi (m)"
        required
      />
      <br />
      <br />
      <button onClick={Hasil}>Hitung BMI</button>
      {hasil !== null && <p>Hasil: {hasil}</p>}
    </div>
  );
}

export default KalkulatorBMI;
