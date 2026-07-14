import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./app/routes";
import "./styles.css";

export const createApp = ViteSSG(
  App,
  {
    base: import.meta.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      if (to.path !== from.path) return { top: 0 };
      return undefined;
    },
  },
  ({ router }) => {
    router.beforeEach((to) => {
      if (typeof document === "undefined") return;
      const locale = to.meta.locale;
      if (locale === "en" || locale === "fr" || locale === "ar-TN") {
        document.documentElement.lang = locale;
        document.documentElement.dir = locale === "ar-TN" ? "rtl" : "ltr";
      }
    });
  },
);
