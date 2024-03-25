<template>
  <div>
    <button type="submit" class="login-button">Iniciar Sesión</button>
    <button class="register-button">Registrarse</button>
  </div>
</template>

<style scoped>
.login-button, .register-button {
  font-family: Arial, sans-serif;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.register-button {
  background-color: #46c44a;
}

.register-button:hover {
  background-color: #42a348;
}

.login-button:hover {
  background-color: #45a049;
}
</style>
