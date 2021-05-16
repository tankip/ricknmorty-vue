<template>
  <div class="flex flex-row justify-between" v-if="location" @click="viewDetails">
    <h3 class="text-md">{{ location.name }}</h3>
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
