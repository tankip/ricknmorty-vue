<template>
  <CharactersCard v-if="characters">
    <CharacterContent v-for="character in characters" :key="character.id">
      <ChatacterItem :character="character" />
    </CharacterContent>
  </CharactersCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Character } from "@/types";
import CharactersCard from "./CharactersCard.vue";
import CharacterContent from "./CharacterContent.vue";
import ChatacterItem from "./CharacterItem.vue";

export default defineComponent({
  components: {
    CharactersCard,
    CharacterContent,
    ChatacterItem,
  },
  props: {
    characters: {
      required: true,
      type: Array as PropType<Character[]>,
    },
  },
});
</script>
