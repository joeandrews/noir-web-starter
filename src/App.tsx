import React from "react";
import Noir from "noir-js-bogota/dest/noir";

import "./App.css";

const acirHex =
  "cd933112823010454710905b7884842492743a6363eb7801c05529a460223d3790606ba9a3de88dbd80833b4b2055bfdeacffeb77f6bff5e3eb65176043399b7caea943d2f3fab3cd5a733e834a9abba599261432756659a25230bce210c80321a9140c552102ee285a4920a29f681640c2497a18a554814e50ce8412876f8d94c072f42caf73acd21d16901e56b975fb224d2709b3a6e97dee994dbe770adcd7010ceff1eb415ee4850a2c3b1118239081e1e6ecf9e9bac805c1b6f86fe57de0ce3af7ce432a024f3ab915cb257f30aa1e608b88d657f01";

async function prove() {
  const NoirJs = await Noir.new();
  const res = await NoirJs.createProof(acirHex, ["0x03", "0x04", "0x0c"], 64);
  const verified = await NoirJs.verifyProof(res.verifier, res.proof);
  console.log("proof verification", verified);
  console.log(res);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={prove}>Prove</button>
      </header>
    </div>
  );
}

export default App;
