<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import HeadApp from "@/components/HeadApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  components: {
    HeadApp,  FooterApp
  }
}
</script>

<template>

  <head-app></head-app>

  <RouterView  />

  <footer-app></footer-app>

</template>

<style></style>
