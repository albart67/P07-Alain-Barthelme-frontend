<template>
  <div>
    <h1>Récepteur</h1>
    <Radio />
    {{ message }}
  </div>
</template>

<script>
import Radio from "./Radio";
export default {
  name: "Receiver",
  component: {
    Radio
  },
  data: () => ({
    message: "Pas de message"
  })
};
</script>

<style scoped lang="scss"></style>