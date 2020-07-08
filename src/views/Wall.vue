<template>
  <div class="message">
    <Message />

    <h2>Messages posté</h2>
    <button>Envoyer un message</button>
  </div>
</template>

<script>
import Message from "../components/Message";
import MessageService from "../service/messages.service";

export default {
  data() {
    return {
      messages: []
    };
  },
  components: { Message },
  mounted() {
    MessageService.getMessages.then(messages => {
      this.messages = messages;
      console.log(this.messages);
    });
  }
};
</script>

<style scoped lang="scss">
.message {
  margin-bottom: 15px;
}
</style>