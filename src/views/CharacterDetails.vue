<template>
  <Button @click="goBack">Go back</Button>
  <div class="flex items-center justify-center my-6">
     <img class="h-64 w-64 rounded-full object-center ring-4 ring-blue-400" v-if="character" :src="character.image" />
  </div>
  <DetailsCard v-if="character">
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Name</h3>
      <h2 class="font-semibold">{{ character.name }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Gender</h3>
      <h2 class="font-semibold">{{ character.gender }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Species</h3>
      <h2 class="font-semibold">{{ character.species }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Type</h3>
      <h2 class="font-semibold">{{ character.type }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Status</h3>
      <h2 class="font-semibold">{{ character.status }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Location</h3>
      <h2 class="font-semibold">{{ character.location.name }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Origin</h3>
      <h2 class="font-semibold">{{ character.origin.name }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Created</h3>
      <h2 class="font-semibold">{{ new Date(character.created).toLocaleDateString("en-US") }}</h2>
    </DetailsContent>
  </DetailsCard>
  <Loading v-if="loading">loading... please wait</Loading>
  <Error v-if="error">{{ error.message }}. please try again later</Error>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GET_CHARACTER_QUERY } from "@/schemas/characters";
import { useQuery, useResult } from "@vue/apollo-composable";
import { Loading, Error, Button } from "@/components/ui/";
import { CharacterResult } from "@/types";
import { DetailsCard, DetailsContent } from "@/components/details";

export default defineComponent({
  components: {
    Loading,
    Error,
    Button,
    DetailsCard,
    DetailsContent
  },
  setup() {
    const { params } = useRoute();
    const router = useRouter();
    const { loading, error, result } = useQuery<CharacterResult>(GET_CHARACTER_QUERY, {
      id: Number(params.id),
    });

    const character = useResult(result, null, (data) => data.character);

    const goBack = () => {
      router.back();
    };

    return {
      loading,
      error,
      character,
      goBack,
    };
  },
});
</script>
