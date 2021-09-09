<template>
  <div>
    <button class="button" @click="$router.go(-1)"> Back </button>
    <h1 class="title">User Edit {{$route.params.id}}</h1>
  <form>
    <input type="text" class="input" v-model="user.username">
    <input type="text" class="input" v-model="user.email">
    <button @click="saveUser(user.id)" class="button is-link" type="button">Save</button>
    <router-link to="/user" class="button is-link is-light">Cancel</router-link>  
    
  </form>
    
    
    <!-- <pre>
      {{user}}
    </pre> -->
    
  </div>
</template>

<script>
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users/'
export default {
  async mounted() {
    const res =  await axios.get(url + '/' + this.$route.params.id)
    this.user = res.data
  },
  data() {
    return {
      user: []
    }
  },
  methods: {
    async saveUser(id) {
      try {
        const res =  await axios.put(url + '/' + id)
        console.log(res)
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>