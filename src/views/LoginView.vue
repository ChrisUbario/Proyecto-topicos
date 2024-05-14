<template class="login-container">
    <div class="login-container">
      <img alt="Nuevo logo" class="logo" src="@/assets/logo.jpg" width="445" height="300" /> 
      <Session1 />
      <Session2 />
    </div>
  </template>
  
  <script setup>
  import Session1 from '@/components/Session1.vue'
  import Session2 from '@/components/Session2.vue'
  </script>
  
  <style scoped>
  .login-container {
    background-color: rgb(0, 0, 0); 
    color: black; 
    padding: 20px;
    place-items: center;
  }
  
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  
  @media (min-width: 1024px) {
    .login-container {
      padding-right: calc(var(--section-gap) / 2);
    }
  }
  </style>
  