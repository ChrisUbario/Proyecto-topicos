<template>
    <div>
      <button type="submit" class="login-button">Iniciar Sesión</button>
      <a href="/register" class="register-button">Registrarse</a>
      <Register v-if="showRegisterForm" /> 
    </div>
  </template>
  
  <script>
  import Register from './Register.vue'; 
  
  export default {
    components: {
      Register 
    },
    data() {
      return {
        showRegisterForm: false 
      };
    },
    methods: {
      goToRegisterPage() {
        this.showRegisterForm = true;
      }
    }
  }

  </script>
  
  
  <style scoped>
 .login-button {
    font-family: Georgia, 'Times New Roman', Times, serif;
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
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 100%;
    padding: 10px;
    background-color: #46c44a;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
}
  
  .register-button:hover {
    background-color: #42a348;
  }
  
  .login-button:hover {
    background-color: #45a049;
  }
  </style>
  