<template setup>
    <div class="modulo">
  <img class="logo" src="./assets/logo.jpg" alt="Logo de la aplicación">
  <div class="busqueda">
    <input type="text" id="search" placeholder="Buscar...">
  </div>
  <div class="iconos">
    <img class="usuario" src="./assets/user.png" alt="Imagen del usuario">
    <img class="engranaje" src="./assets/config.png" alt="Opciones de configuración">
  </div>
</div>
</template>

<style scoped>
.modulo {
  display: flex;
  align-items: center;
  padding: 10px;
}

.logo {
  height: 40px;
}

.busqueda {
  margin-left: 10px;
  flex-grow: 1;
}

.busqueda input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

.iconos {
  margin-left: 10px;
  display: flex;
}

.iconos img {
  height: 30px;
  margin-left: 10px;
}

input[type="search"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #4CAF50;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
}
</style>