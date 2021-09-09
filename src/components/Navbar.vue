<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" @click="active=!active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="className">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/user" class="navbar-item">User</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
      </div>
    </nav>
      
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
  computed: {
    className() {
      return this.active ? 'navbar-menu is-active' : 'navbar-menu' 
    }
  }
}
</script>