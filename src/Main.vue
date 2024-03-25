<script setup>
import Session1 from './components/Session1.vue'
import Session2 from './components/Session2.vue'
import Register from './components/Register.vue'
import Search from './components/Search.vue'
import Sidebar from './components/Sidebar.vue'
import Sidebar2 from './components/Sidebar2.vue'
import Tasks from './components/Tasks.vue'
import Tab from './components/Tab.vue'
import Content from './components/Content.vue'
import Bar from './components/Bar.vue'
</script>

<template class="app-container">
  <header><Search/></header>
  <div class="app-contaniner">
    <Sidebar/>
    <Sidebar2/>
    <Tab/>
    <Content/>
    <Bar/>
    <!-- <img alt="Nuevo logo" class="logo" src="./assets/logo.jpg" width="445" height="300" />
  -->
  </div>
  <main class="app-container">
    <!-- <Tasks/> -->
    <!-- <Session1 />
    <Session2/>
    <Register/> -->
    
  </main>

</template>

<style scoped>
.app-container{
  background-color: black;
  color: black;
  padding: 20px;
  place-items: center;
}

header {
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


.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>