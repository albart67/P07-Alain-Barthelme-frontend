<template>
  <div class="users">
    <button class="btn btn-primary" @click="fetchMessages">Fetch Messages</button>

    <input class="add-search-input" type="text" v-model="newMessage" />

    <input type="file" @change="onFileSelected" />
    <button class="btn btn-primary file-btn" @click="onUpload">Telecharger image</button>

    <button class="btn btn-primary" @click="sendMessage">Envoyer Message</button>
    <div>
      <p v-if="submitting">Submitting...</p>
      <p v-if="loading">Loading...</p>

      <ul class="message-box">
        <li v-for="message in messages" :key="message.id">
          <h1>Utilisateur: {{message.id}}</h1>
          <p>Message:{{ message.text }}</p>
          <button class="btn btn-primary" @click="modifyMessage">Modifier</button>
          <button class="btn btn-primary" @click="deleteMessage">Supprimer</button>
          <ul>
            <li v-for="message in messages" :key="message.id">
              <p>{{message.comment}}</p>
            </li>
          </ul>

          <input class="add-search-input" type="text" v-model="newComment" />
          <br />
          <button class="btn btn-primary" @click="sendComment">Envoyer commentaire</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: [],
      comments: [],
      loading: false,
      submitting: false,
      newMessage: "",
      newComment: "",
      selectedFile: ""
    };
  },
  methods: {
    fetchMessages() {
      this.loading = true;
      this.messages = [];

      axios.get("http://localhost:3001/api/allMessageUser").then(response => {
        const data = response.data;

        this.messages = data;

        this.loading = false;
        console.log(data);
      });
    },

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      axios.post("http://localhost:3001/api/uploadFile", fd).then(res => {
        console.log(res);
      });
    },

    sendMessage() {
      axios
        .post("http://localhost:3001/api/newMessage", {
          userId: 1,
          text: this.newMessage
        })
        .then(response => {
          response;
        });
    },

    deleteMessage() {
      axios
        .delete("http://localhost:3001/api/delete/:id", {
          id: 1
        })
        .then(response => {
          response;
        });
    },

    modifyMessage() {
      axios
        .put("http://localhost:3001/api/delete/:id", {
          id: 1
        })
        .then(response => {
          response;
        });
    },

    sendComment() {
      axios
        .post("http://localhost:3001/api/newComment", {
          userId: 1,
          text: this.newComment,
          messageId: 10
        })
        .then(response => {
          response;
        });
    }
  }
};
</script>

<style scoped>
#app-vue {
  display: flex;
  justify-content: center;
}

.users {
  display: flex;
  width: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffeee4;
  margin: 10px 20px;
}

.message-box {
  border: 2px solid black;
  display: flex;
  flex-direction: column;
}

.add-search-input {
  margin: 10px 100px;
}

li {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
}

h1 {
  background-color: bisque;
  font-size: 15px;
  margin: 5px 10px;
  text-align: left;
}

h2 {
  background-color: cornflowerblue;
  font-size: 15px;
  margin: 5px 10px;
  text-align: left;
}

p {
  background-color: white;
  font-size: 12px;
  margin: 5px 10px;
  text-align: left;
}

.btn {
  width: 160px;
  height: auto;
  margin: 5px auto;
}

.file-btn {
  justify-content: left;
  background-color: gray;
}
</style>