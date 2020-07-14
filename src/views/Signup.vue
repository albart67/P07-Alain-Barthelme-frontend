<template>
  <div>
    <h4>Register</h4>
    <form>
      <label for="name">Name</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>

      <label for="password-confirm">Is this an administrator account?</label>
      <div>
        <select v-model="isAdmin">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div>
        <button type="submit" @click="handleSubmit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      password: "",
      isAdmin: ""
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("http://localhost:3001/api/signup", {
          name: this.name,
          password: this.password,
          isAdmin: this.isAdmin
        })
        .then(response => {
          response;
        });
    }
  }
};
</script>


