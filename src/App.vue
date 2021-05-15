<template>
  <div class="container mx-auto px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 text-xl text-gray-500">
    <Header />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Header } from "@/components/ui/";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>

<style></style>
