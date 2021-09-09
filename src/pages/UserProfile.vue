<template>
  <div>
    <button class="button" @click="$router.go(-1)"> Back </button>
    <h1 class="title">User Profile {{$route.params.id}}</h1>
    
    <pre>
      {{user}}
    </pre>
    
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