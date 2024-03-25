<template>
  <form class="login-form">
    <div class="form-group">
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" placeholder="Ingrese su correo electrónico" required>
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" placeholder="Ingrese su contraseña" required>
    </div>
  </form>
</template>

<style scoped>
.login-form {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #4CAF50;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
}
</style>