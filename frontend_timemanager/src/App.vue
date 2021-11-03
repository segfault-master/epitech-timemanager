<template>
  <Header
      v-bind:user="user"
      v-on:logout="logout"
  >
  </Header>
  <router-view
      v-bind:userID="userID"
      v-bind:user="user"
      v-on:setUserID="setUserID"
      v-on:setUser="setUser"
  ></router-view>
</template>

<script>
import Header from "@/components/VisualComponent/Header";

export default {
  name: 'App',
  data() {
    return {
      userID: 0,
      user: null
    }
  },
  mounted() {
    this.userID = localStorage.getItem('userId') === null ? 0 : localStorage.getItem('userId');
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    if (username && email) {
      this.user = {
        "id": this.userID,
        "username": username,
        "email": email
      }
    }
  },
  components: {
    Header,
  },
  methods: {
    setUserID: function (userid){
      this.userID = userid;
      localStorage.setItem('userId', userid)
    },
    logout: function () {
      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('userId')
      this.userID = 0
      this.user = null
      this.$router.push('/')
    },
    setUser: function (user){
      this.user = user;
      localStorage.setItem('username', user.username)
      localStorage.setItem('email', user.email)
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
