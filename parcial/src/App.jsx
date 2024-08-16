import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { formEntries } from "../constants";

function App() {
  const [formValue, setFormValue] = useState([
    {
      nombre: "",
      apellido: "",
      edad: 0,
    },
  ]);

  const [showCard, setShowCard] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const validateForm = () => {
    const { nombre, apellido } = formValue[0];
    if (nombre.length <= 3 || apellido.length <= 6) {
      return false;
    }
    return true;
  };

  const handleFormValues = (e, fieldName) => {
    const value = e.target.value;
    const updatedValues = {
      ...formValue[0],
      [fieldName]: value,
    };
    setFormValue([updatedValues]);

    setIsValidInput(validateForm());
  };

  const handleShowCard = () => {
    if (validateForm()) {
      setShowCard(true);
    } else {
      setIsValidInput(false);
      alert("Por favor chequea que la información sea correcta");
    }
  };

  useEffect(() => {
    console.log(formValue);
  }, [formValue]);

  return (
    <>
      <h1>Carga de estudiantes</h1>
      {formEntries.map((form) => (
        <div key={form.id}>
          <p>{form.label}</p>
          <input
            type="text"
            placeholder={form.placeholder}
            value={formValue[0][form.placeholder]}
            onChange={(e) => handleFormValues(e, form.placeholder)}
            style={{ borderColor: isValidInput ? "initial" : "red" }}
          />
        </div>
      ))}
      <button onClick={handleShowCard}>¡Mira los datos que ingresaste!</button>
      {showCard && <Card formValue={formValue} />}
    </>
  );
}

export default App;
