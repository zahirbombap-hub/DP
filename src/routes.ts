import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("boutique-law-firm", "routes/boutique-law-firm.tsx"),
  route("agua-linda", "routes/agua-linda.tsx"),
  route("digital-artist", "routes/digital-artist.tsx"),
  route("handmade-wool", "routes/handmade-wool.tsx"),
  route("tattoo-artist", "routes/tattoo-artist.tsx"),
  route("shoekos", "routes/shoekos.tsx"),
  route("tattoo2", "routes/tattoo2.tsx"),
  route("*", "routes/notfound.tsx"),
] satisfies RouteConfig;