<template>
  <div id="app" class="app-container">
    <header>
      <!-- Contenido del encabezado -->
    </header>

    <main>
      <router-view/>
    </main>

    <footer>
      <!-- Contenido del pie de página -->
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Navegar a la vista de inicio de sesión al cargar la aplicación
if (router) {
  router.push({ name: 'Login' })
}
</script>

<style scoped>
.app-container {
  background-color: rgb(0, 0, 0); /* Cambiado a blanco para que el contenido sea visible */
  color: black; /* Cambiado a negro para que el contenido sea visible */
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
