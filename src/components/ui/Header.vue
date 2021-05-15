<template>
  <nav class="flex flex-row h-16 items-center">
    <div class="flex-auto">
      <router-link class="hover:text-blue-400" to="/">Rick & Morty</router-link>
    </div>
    <div class="flex-auto">
      <div class="flex justify-end">
        <router-link class="hover:text-blue-400" :class="getCurrent('/locations') ? 'text-blue-400' : ''" to="/locations">Locations</router-link>
        <router-link class="hover:text-blue-400 ml-2 sm:ml-8" to="/locations">Episodes</router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {},
  methods: {
    getCurrent(path: string) {
      return this.$route.path === path;
    },
  },
});
</script>
