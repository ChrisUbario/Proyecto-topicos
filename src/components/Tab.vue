<template>
    <div class="menu-container">
      <ul class="menu">
        <li><a href="#">Archivos</a></li>
        <li><a href="#">Chat</a></li>
        <li><a href="#">Tareas</a></li>
        <li><a href="#">Cronograma</a></li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .menu-container {
    border: 1px solid #4CAF50;
    border-radius: 5px;
    margin: 10px;
    position: fixed;
    top: 150px;
    left: 620px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 20px;
    border-top: 2px solid #4CAF50;
    padding-top: 20px;
    border-left: 2px solid #4CAF50;
    padding-left: 50px;
    border-right: 2px solid #4CAF50;
    padding-right: 50px;
    flex: auto;
  }
  
  .menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex: auto;
  }
  
  .menu li {
    margin-right: 200px;
  }
  
  .menu li:last-child {
    margin-right: 0; /* Eliminar el margen derecho del último elemento */
  }
  
  .menu a {
    text-decoration: none;
    color: #fff;
    padding: 10px;
    background-color: #4CAF50;
    border-radius: 5px;
  }
  
  .menu a:hover {
    background-color: #dbe45e; /* Cambiar color al pasar el ratón */
    color: black;
  }
  </style>
  