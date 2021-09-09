<template>
    <div>
        <section class="section">
            <div class="container">    
                <navbar />    
                <hr />
                <router-view />
        <!-- <movie-list /> -->
            </div>
        </section>
    </div>
</template>

<script>
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar.vue";
// import MovieList from './components/MovieList.vue'

export default {
  components: {
    navbar: Navbar,
  },
};
</script>