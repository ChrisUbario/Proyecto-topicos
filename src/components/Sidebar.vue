<template>
    <div class="container">
    <div class="sidebar">
      <ul class="navigation-list">
        <li><button class="navigation-button">Tareas</button></li>
        <li><button class="navigation-button">Proyectos</button></li>
        <li><button class="navigation-button">Categorías</button></li>
        <li><button class="navigation-button">Grupos</button></li>
        <li><button class="navigation-button">Calendario</button></li>
      </ul>
    </div>
</div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 50px;
    flex: auto;
  }

  .sidebar {
    position: fixed; /* Fijar la posición */
    left: 70px; /* Colocarlo en el lateral izquierdo */
    top: 170px;
    height: 100%; /* Altura completa */
    width: 200px; /* Ancho de la barra lateral */
    background-color:black; /* Color de fondo */
    color: #fff; /* Color del texto */
    border-right: 2px solid #4CAF50;
    padding-right: 10px;
    flex: auto;
  }
  
  .navigation-list {
    list-style: none; /* Eliminar viñetas de la lista */
    padding: 0; /* Eliminar relleno */
    margin: 0; /* Eliminar márgenes */
  }
  
  .navigation-list li {
    padding: 20px 20px; /* Espaciado de los elementos de la lista */
  }
  
  .navigation-list li .navigation-button {
    width: 100%; /* Ancho completo del botón */
    padding: 10px; /* Espaciado interno */
    border: none; /* Eliminar borde */
    background-color: #4CAF50; /* Color de fondo del botón */
    color: #fff; /* Color del texto */
    font-family: Georgia, 'Times New Roman', Times, serif; /* Fuente del texto */
    font-size: 16px; /* Tamaño de fuente */
    cursor: pointer; /* Cambiar el cursor al pasar por encima */
    border-radius: 10px;
    transition: background-color 0.3s; /* Transición de color al pasar el ratón */
  }
  
  .navigation-list li .navigation-button:hover {
    background-color: #dbe45e; /* Cambiar color al pasar el ratón */
    color: black;
}
  </style>
  