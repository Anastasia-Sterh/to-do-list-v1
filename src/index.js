import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './components/Form';
import { ContainerForForm } from './components/ContainerForForm';
import { Header } from './components/Header';



function Button(props) {
  console.log(props);


  let [number, setNumber] = useState(33);
  // let [list, setList] = useState(0);
  // let [name, setName] = useState(0);
  // let [age, setAge] = useState(0);

  // console.log(state)
  return <button onClick={() => { setNumber(number + 1) }}> {number} </button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ContainerForForm />
  </React.StrictMode>
);



