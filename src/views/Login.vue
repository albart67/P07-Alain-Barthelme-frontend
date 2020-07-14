  
  
  <template>
  <div>
    <h4>Login</h4>
    <form>
      <label for="email">Nom</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus />
      </div>
      <div>
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" v-model="password" required />
        </div>
      </div>
      <div>
        <button type="submit" @click="handleSubmit">Login</button>
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
      name: ""
      //password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        axios
          .post("http://localhost:3001/api/login", {
            name: this.name
            //password: this.password
          })
          .then(response => {
            response;
          })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    }
  }
};
</script>
  
  