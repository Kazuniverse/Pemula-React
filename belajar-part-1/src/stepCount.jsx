import { useState } from "react";

function StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h2>Hitungan: {count}</h2>
      <input 
        type="number" 
        value={step} 
        onChange={(e) => setStep(Number(e.target.value))} 
      />
      <button onClick={() => setCount(count + step)}>Tambah</button>
      <button onClick={() => setCount(count - step)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default StepCounter;