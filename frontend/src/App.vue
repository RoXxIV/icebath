<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Stay Cold</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/ice-bath-list-view" class="nav-link"
            >Ice Baths</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/statistics-view" class="nav-link"
            >Statistiques</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Ajouter</router-link>
        </li>
      </div>
    </nav>
    <div class="container">
      <banner />
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "app",
  components: {
    Banner,
  },
};
</script>
