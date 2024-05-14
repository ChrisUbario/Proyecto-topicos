<template class="login-container">
  <header><Search/></header>
    <div class="login-container">
      <Sidebar/>
      <Sidebar2/>
    </div>
  </template>
  
  <script setup>
  import Search from '@/components/Search.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Sidebar2 from '@/components/Sidebar2.vue'
  </script>
  
  <style scoped>
  .app-container{
    background-color: black;
    color: black;
    padding: 20px;
    place-items: center;
  }

  header{
    line-height: 1.5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  