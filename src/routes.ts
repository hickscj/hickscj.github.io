import {
  type RouteConfig,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("./App.tsx"),
  route("about", "./components/About.tsx"),
] satisfies RouteConfig;
