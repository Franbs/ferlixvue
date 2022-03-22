<template>
  <div v-if="$auth.isAuthenticated">
    <Header></Header>
    <movie-list></movie-list>
  </div>
  <div v-else>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import MovieList from '../components/MovieList.vue'
export default {
  components: { Header, MovieList }
}
</script>
