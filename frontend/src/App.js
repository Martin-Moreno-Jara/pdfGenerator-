import logo from "./logo.svg";
import "./App.css";
import { saveAs } from "file-saver";
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(0);
  const [nickname, setNickname] = useState("");
  const list = [
    { name: "a", number: 1 },
    { name: "b", number: 2 },
    { name: "c", number: 3 },
  ];

  const handleChange = ({ target: { value, name } }) => {
    if (name === "nombre") {
      setNombre(value);
    }
    if (name === "apellido") {
      setApellido(value);
    }
    if (name === "edad") {
      setEdad(value);
    }
    if (name === "nickname") {
      setNickname(value);
    }
  };

  const createPDF = async () => {
    const sendData = await fetch("http://localhost:5000/pdf/createPDF", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, apellido, edad, nickname, list }),
    });
    const sendResponse = await sendData.json();
    if (!sendData.ok) {
      console.log(sendResponse);
      return;
    }
    const getPDF = await fetch("http://localhost:5000/pdf/fetchPDF", {
      headers: {
        "Content-Type": "application/pdf",
      },
    });

    if (!getPDF.ok) {
      const getPDF_response = await getPDF.json();
      console.log(`error: ${getPDF_response}`);
    }

    if (getPDF.ok) {
      const blob = await getPDF.blob();
      saveAs(blob, "report.pdf");
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="nombre"
        name="nombre"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="apellido"
        name="apellido"
        onChange={handleChange}
      />
      <input type="number" name="edad" onChange={handleChange} />
      <input
        type="text"
        placeholder="nickname"
        name="nickname"
        onChange={handleChange}
      />
      <button onClick={createPDF}>Create pdf s</button>
    </div>
  );
}

export default App;
