<template>
  <div class="message">
    <h1 class="message-title">titre {{ data.Title }}</h1>
    <h2 class="message-autor">auteur {{ data.Autor }}</h2>
    <p class="message-body">text {{ data.Body }}</p>
    <h2>Ecrire un commentaire</h2>
    <button>Envoyer un commentaire</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        title: "Title",
        autor: "Autor",
        body: "Body"
      }
    };
  }
};
</script>

<style>
</style>