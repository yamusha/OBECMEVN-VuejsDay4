<template>
  <div>
    <button class="button" @click="$router.go(-1)"> Back </button>
    <h1 class="title">User Edit {{$route.params.id}}</h1>

    <input type="text" class="input" v-model="user.username">
    <input type="text" class="input" v-model="user.email">
    
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
}
</script>