<template>
  <div class="header">
    <img class="logo" src="@/assets/logo.jpg" alt="Logo de la aplicación">
    <div class="search-box">
      <input type="text" id="search" placeholder="Buscar..." class="search-input">
    </div>
    <div class="user-settings">
      <img class="user-icon" src="@/assets/user.png" alt="Imagen del usuario">
      <img class="config-icon" src="@/assets/config.png" alt="Opciones de configuración">
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  flex: auto;
}

.logo {
  height: 13vh; /* El logo ocupa el 10% del alto de la pantalla */
  margin-right: 10%;
}

.search-box {
  flex-grow: 1; 
  margin: 0 2vw; /* Márgenes horizontales del 2% del ancho de la pantalla */
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #4CAF50;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
}

.user-settings {
  margin-right: 2vw; /* Margen derecho del 2% del ancho de la pantalla */
}

.user-settings img {
  height: 3vh; /* Los iconos tienen un tamaño relativo al 3% del alto de la pantalla */
  margin-left: 1vw; /* Margen izquierdo del 1% del ancho de la pantalla */
}
</style>
