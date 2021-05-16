<template>
  <div class="flex justify-between my-4">
    <h3>Characters</h3>
    <input class="px-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-sm" type="text" placeholder="search characters" />
  </div>

  <Loading v-if="loading">loading... please wait</Loading>

  <div v-if="data">
    <CharactersContainer :characters="data.results" />
    <div class="flex justify-between my-6">
      <Button @click="data.info.prev && handlePage(data.info.prev)">prev</Button>
      <Circle>{{ page }}</Circle>
      <Button @click="data.info.next && handlePage(data.info.next)">next</Button>
    </div>
  </div>
  <Error v-if="error">{{ error.message }}. please try again later</Error>
</template>
<script lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { defineComponent, ref } from "vue";
import { GET_CHARACTERS_QUERY } from "@/schemas/characters";
import { CharactersResults } from "@/types";
import { Loading, Error, Button, Circle } from "@/components/ui/";
import CharactersContainer from "@/components/characters/CharactersContainer.vue";

export default defineComponent({
  name: "Characters",
  components: {
    Loading,
    Error,
    CharactersContainer,
    Button,
    Circle,
  },
  setup() {
    const page = ref<number>(1);

    const { loading, error, result, variables } = useQuery<CharactersResults>(GET_CHARACTERS_QUERY, {
      page: page.value,
    });

    const data = useResult(result, null, (data) => data.characters);

    const handlePage = (newPage: number) => {
      page.value = newPage;
      variables.value = {
        page: page.value,
      };
    };

    return {
      loading,
      error,
      data,
      handlePage,
      page,
    };
  },
});
</script>
