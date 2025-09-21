import { useState } from "react";

function ShowHideText() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <p>Halo, aku bisa disembunyikan 👋</p>}
    </div>
  );
}

export default ShowHideText;
