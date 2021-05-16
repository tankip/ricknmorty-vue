<template>
  <Button @click="goBack">Go back</Button>
  <DetailsCard v-if="location">
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Name</h3>
      <h2 class="font-semibold">{{ location.name }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Dimension</h3>
      <h2 class="font-semibold">{{ location.dimension }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Type</h3>
      <h2 class="font-semibold">{{ location.type }}</h2>
    </DetailsContent>
    <DetailsContent>
      <h3 class="text-gray-400 uppercase">Created</h3>
      <h2 class="font-semibold">{{ new Date(location.created).toLocaleDateString("en-US") }}</h2>
    </DetailsContent>
  </DetailsCard>
  <div class="mt-4" v-if="location?.residents.length">
      <h3 class="mb-2">Residents</h3>
      <CharactersContainer :characters="location.residents" />
  </div>
  <Loading v-if="loading">loading... please wait</Loading>
  <Error v-if="error">{{ error.message }}. please try again later</Error>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GET_LOCATION_QUERY } from "@/schemas/location";
import { useQuery, useResult } from "@vue/apollo-composable";
import { Loading, Error, Button } from "@/components/ui/";
import { LocationResult } from "@/types";
import { DetailsCard, DetailsContent } from "@/components/details";
import CharactersContainer from "@/components/characters/CharactersContainer.vue";

export default defineComponent({
  components: {
    Loading,
    Error,
    Button,
    DetailsCard,
    DetailsContent,
    CharactersContainer
  },
  setup() {
    const { params } = useRoute();
    const router = useRouter();
    const { loading, error, result } = useQuery<LocationResult>(GET_LOCATION_QUERY, {
      id: Number(params.id),
    });

    const location = useResult(result, null, (data) => data.location);

    const goBack = () => {
      router.back();
    };

    return {
      loading,
      error,
      location,
      goBack,
    };
  },
});
</script>
