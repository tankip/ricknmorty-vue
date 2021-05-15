import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Locations from "@/views/Locations.vue";
import LocationDetails from "@/views/LocationDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    name: "Location Details",
    component: LocationDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
