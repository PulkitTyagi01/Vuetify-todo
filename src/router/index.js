import Vue from "vue";
import VueRouter from "vue-router";
import TheTodo from "../views/TheTodo.vue";
import TheSection from "../views/TheSection.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TheLogin",
    component: () => import("../views/TheLogin.vue"),
  },
  {
    path: "/registration",
    name: "TheRegistration",
    component: () => import("../views/TheRegistration.vue"),
  },
  {
    path: "/todo",
    name: "TheTodo",
    component: TheTodo,
  },
  {
    path: "/section",
    name: "section",
    component: TheSection,
  },
  {
    path: "/about/:param",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/:notFound",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to === from){
    console.log('same route')
    return
  }
  document.title = `Vuetify Todo - ${to.name}`;
  next();
});

export default router;
