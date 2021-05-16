<template>
  <div class="flex flex-row justify-items-start items-center" v-if="character" @click="viewDetails">
    <img class="h-12 rounded-l-sm object-center object-fill" :src="character.image" />
    <h3 class="text-md pl-4">{{ character.name }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
import { Character } from "@/types";

export default defineComponent({
  props: {
    character: {
      required: true,
      type: Object as PropType<Character>,
    },
  },
  setup(props) {
    const router = useRouter();
    const viewDetails = () => {
      router.push({
        name: "CharacterDetails",
        params: {
          id: props.character.id,
        },
      });
    };
    return {
      viewDetails,
    };
  },
});
</script>
