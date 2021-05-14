import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.css";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

import { DefaultApolloClient } from "@vue/apollo-composable";

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql/",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render() {
    return h(App);
  },
})
  .use(router)
  .mount("#app");
