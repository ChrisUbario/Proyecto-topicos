<template>
    <div class="bar-container">
      <input type="text" placeholder="Enviar mensaje...">
      <button>Enviar</button>
    </div>
  </template>
  
  <style scoped>
  .bar-container {
    border: 1px solid #4CAF50;
    border-radius: 5px;
    margin: 10px;
    position: fixed;
    bottom: 30px;
    left: 620px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    display: flex; /* Para que los elementos estén en línea */
    align-items: center; /* Para alinear verticalmente */
    width: 52%; /* Ancho relativo */
    padding: 20px;
  }
  
  .bar-container input {
    flex: auto; /* Para que el input ocupe todo el espacio disponible */
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #444; /* Color de fondo */
    color: #fff; /* Color del texto */
  }
  
  .bar-container button {
    margin-left: 10px; /* Espacio entre el input y el botón */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  
  .bar-container button:hover {
    background-color: #42a348;
  }
  </style>
  