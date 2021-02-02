import axios from 'axios';
import React, { useRef } from 'react';
import './App.css';


function App() {

  let inputName = useRef<HTMLInputElement>(null)
  let inputAge = useRef<HTMLInputElement>(null)
  let inputCompany = useRef<HTMLInputElement>(null)
  let inputPhone = useRef<HTMLInputElement>(null)

  const sendForm = () => {
    const nome = inputName.current?.value
    const idade = inputAge.current?.value
    const empresa = inputCompany.current?.value
    const telefone = inputPhone.current?.value

    const usuarioASerEnviado = {
      nome,
      idade,
      empresa,
      telefone
    }

    axios.post("http://localhost:4000/usuarios", usuarioASerEnviado)

  }

  return (
    <div className="App">
      <h2>Formulário</h2>
      <input type="text" ref={inputName} placeholder='Digite seu nome aqui...'/><br />
      <input type="text" ref={inputAge} placeholder='Digite sua idade aqui...'/><br />
      <input type="text" ref={inputCompany} placeholder='Digite sua empresa aqui...'/><br />
      <input type="text" ref={inputPhone} placeholder='Digite seu telefone aqui...'/><br />
      <br />
      <button onClick={sendForm}>Enviar Formulário</button>
    </div>
  );
}

export default App;
