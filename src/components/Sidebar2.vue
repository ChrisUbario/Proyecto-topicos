<template>
    <div class="container">
      <div class="sidebar">
        <div class="container-info">
          <h2>Tareas | Proyectos | Grupo</h2>
          <hr> 
          <p>Información</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 50px;
  }
  
  .sidebar {
    position: fixed;
    left: 290px; /* Posición en el lateral derecho */
    top: 170px;
    height: 100%;
    width: 25%;
    background-color: black;
    color: #fff;
    border-right: 2px solid #4CAF50;
    padding-right: 10px;
    flex: 0;
    
  }
  
  .container-info {
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 10px; /* Añade un poco de espacio interno */
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
  }
  
  .container-info h2 {
    margin-top: 0; /* Elimina el margen superior predeterminado */
    margin-bottom: 10px; /* Agrega espacio inferior */
    
  }
  
  .container-info hr {
    margin-top: 10px; /* Agrega espacio superior */
    margin-bottom: 10px; /* Agrega espacio inferior */
    border: none;
    border-top: 2px solid #4CAF50;
    padding-top: 10px;
    flex: 0;
  }
  
  .container-info p {
    margin-top: 0; /* Elimina el margen superior predeterminado */
    margin-bottom: 0; /* Elimina el margen inferior predeterminado */
  }
  </style>
  