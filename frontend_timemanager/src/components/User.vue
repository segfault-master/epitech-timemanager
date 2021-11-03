<template>
  <div class="wrapper">
    <div v-if="page === 1">
      <H2>Sign in</H2>
      <div class="wrapper">
        <input v-model="inputUsername" placeholder="username" />
        <input v-model="inputEmail" placeholder="email" />
        <button @click="createUser()">Create</button>
      </div>
    </div>

    <div v-if="page === 2">
      <H2>Login</H2>
      <div class="wrapper">
        <input v-model="inputUserID" placeholder="id" />
        <button @click="getUser()">Login</button>
      </div>
    </div>


    <div v-if="page === 3">
      <H2>Profil</H2>
      <div class="wrapper">
        <input v-model="inputUsername" :placeholder="user.username" />
        <input v-model="inputEmail" :placeholder="user.email" />
        <input v-model="inputUserID" :placeholder="userID" type="number"/>
        <button @click="updateUser()">Update</button>
        <button @click="deleteUser()">Delete</button>
      </div>
    </div>

    <Alert
        class="alert"
        v-bind:message="errorMessage"
        v-if="errorMessage !== ''"
        v-on:close="removeErrorMessage"
    ></Alert>
  </div>

</template>

<script>


import UserService from "@/services/user.service";
import Alert from "@/components/VisualComponent/Alert";


const userService = new UserService();

export default {
  name: "User",
  components: {
    Alert
  },
  data() {
    return {
      inputEmail: '',
      inputUsername: '',
      inputUserID: null,
      errorMessage: '',
      page: 0
    }
  },
  mounted() {
    this.page = Number(this.$route.params.page);
  },
  watch: {
    $route(to) {
      this.page = Number(to.params.page);
    }
  },
  props: {
    userID: Number,
    user: Object
  },
  methods: {
    createUser: function () {
      let user = {
        "user": {
          "username": this.inputUsername,
          "email": this.inputEmail
        }
      }
      userService.create(user).then((data) => {
        console.log(data);
        this.inputUsername = "";
        this.inputEmail = "";
        alert("Your id is: " + data.data.data.id + ", use it to login")
      }).catch ((error) => {
       this.errorMessage = error;
      })
    },
    updateUser: function () {
      let user = {
        "user": {
          "username": this.inputUsername,
          "email": this.inputEmail
        }
      }
      userService.update(user, this.inputUserID).then((data) => {
        console.log(data);
        this.inputUsername = "";
        this.inputEmail = "";
        this.inputUserID = 0;
      }).catch ((error) => {
        this.errorMessage = error;
      })
    },
    getUser() {
      userService.getSingle(this.inputUserID).then((data) => {
        const res = data.data.data;
        this.setUserId(res.id);
        this.setUser(res);
        this.inputUserID = 0;
        this.$router.push({ name: 'User', params: { page: 3 }})
      }).catch ((error) => {
        this.errorMessage = error;
      })
    },
    deleteUser() {
      userService.delete(this.inputUserID).then((data) => {
        console.log(data);
        this.errorMessage = "ok";
      }).catch ((error) => {
        this.errorMessage = error;
      })
    },
    setUserId: function (evt) {
      this.$emit('setUserID', evt)
    },
    setUser: function (evt) {
      this.$emit('setUser', evt)
    },
    removeErrorMessage: function () {
      this.errorMessage = ''
    }
  },
}

</script>

<style scoped>
  button, input {
    margin-top: 1em;
  }

</style>