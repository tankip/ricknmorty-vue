import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "@/views/About.vue";
import Characters from "@/views/Characters.vue";
import Locations from "@/views/Locations.vue";
import LocationDetails from "@/views/LocationDetails.vue";
import CharacterDetails from "@/views/CharacterDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/characters/:id",
    name: "CharacterDetails",
    component: CharacterDetails,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/locations",
    name: "Locations",
    component: Locations,
  },
  {
    path: "/locations/:id",
    name: "LocationDetails",
    component: LocationDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
