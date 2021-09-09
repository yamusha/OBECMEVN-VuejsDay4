<template>
  <div>
    <h1 class="title">User</h1>
    <button class="button" @click="getUsers">Get Users</button>
    <!-- <pre> {{users}} </pre> -->

    <table class="table">
      <tr>
        <th>
          Name
        </th>
        <th>
          Username
        </th>
        <th>
          Email
        </th>
        <th>
          Action
        </th>
      </tr>
      <tr v-for="each in users" :key="each.id">
        <td> <router-link :to="'/user/'+each.id">{{each.name}}</router-link>  </td>
        <td> {{each.username}} </td>
        <td> {{each.email}} </td>
        <td>
          <router-link :to="'/user/edit/'+each.id" class="button is-warning">Edit</router-link>  
          <button @click="deleteUser(each.id)" class="button is-danger" >Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'
export default {
  mounted() {
    this.getUsers()
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    async getUsers() {
      try {
        const result = await axios.get(url)

        this.users = result.data
      } catch (error) {
        console.log(error.message)
      }
      
    },

    async deleteUser(id) {
      // console.log(id)
      try {
        const deleteUser = confirm('Are you sure to delete user ' + id + '?')
        if(deleteUser) {
          const result = await axios.delete(url + '/' + id)
          console.log(result.data)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>