<template>
  <CountCard v-if="data">
    <CountContent>
      <div class="text-gray-400 uppercase">Characters</div>
      <div class="font-bold text-lg">{{ data.characters.info.count }}</div>
    </CountContent>
    <CountContent>
      <div class="text-gray-400 uppercase">Locations</div>
      <div class="font-bold text-lg">{{ data.locations.info.count }}</div>
    </CountContent>
    <CountContent>
      <div class="text-gray-400 uppercase">episodes</div>
      <div class="font-bold text-lg">{{ data.episodes.info.count }}</div>
    </CountContent>
  </CountCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { CountResult } from "@/types";
import { GET_COUNT_QUERY } from "@/schemas/count";

import CountCard from "./CountCard.vue";
import CountContent from "./CountContent.vue";

export default defineComponent({
  components: {
    CountCard,
    CountContent,
  },
  setup() {
    const { loading, error, result } = useQuery<CountResult>(GET_COUNT_QUERY);

    const data = useResult(result, null, (data) => data);

    return {
      loading,
      error,
      data,
    };
  },
});
</script>
