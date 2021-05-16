<template>
  <div class="flex flex-row justify-between" v-if="location" @click="viewDetails">
    <h3 class="text-md">{{ location.name }}</h3>
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
import { Location } from "@/types";

export default defineComponent({
  props: {
    location: {
      required: true,
      type: Object as PropType<Location>,
    },
  },
  setup(props) {
    const router = useRouter();
    const viewDetails = () => {
      router.push({
        name: "LocationDetails",
        params: {
          id: props.location.id,
        },
      });
    };
    return {
      viewDetails,
    };
  }
    
});
</script>
