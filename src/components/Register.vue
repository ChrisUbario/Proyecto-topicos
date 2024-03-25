<script setup>
import Session1 from './Session1.vue'
</script>

<template>
  <form class="register-form">
    <div class="form-group">
      <label for="name">Nombre de la Cuenta:</label>
      <input type="text" id="name" placeholder="Ingrese el nombre de la cuenta" required>
    </div>
    <Session1 />
    <div class="form-group">
      <label for="confirm-password">Confirmar Contraseña:</label>
      <input type="password" id="confirm-password" placeholder="Confirme su contraseña" required>
    </div>
    <button type="submit" class="register-button">Registrar Cuenta</button>
  </form>
</template>

<style scoped>
.register-form {
  font-family: Georgia, 'Times New Roman', Times, serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

/* Estilos específicos para los inputs del formulario de registro */
.register-form input[type="text"],
.register-form input[type="email"],
.register-form input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #4CAF50;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
}

.register-button {
  width: 100%;
  padding: 10px;
  background-color: #46c44a;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register-button:hover {
  background-color: #42a348;
}
</style>
