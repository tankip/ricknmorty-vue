<template>
  <LocationsCard v-if="locations">
    <LocationContent v-for="location in locations" :key="location.key">
      <LocationItem :location="location" />
    </LocationContent>
  </LocationsCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Location } from "@/types";
import LocationsCard from "./LocationsCard.vue";
import LocationContent from "./LocationContent.vue";
import LocationItem from "./LocationItem.vue";

export default defineComponent({
  components: {
    LocationsCard,
    LocationContent,
    LocationItem,
  },
  props: {
    locations: {
      required: true,
      type: Array as PropType<Location[]>,
    },
  },
});
</script>
