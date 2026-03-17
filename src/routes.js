import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("boutique-law-firm", "routes/boutique-law-firm.jsx"),
  route("agua-linda", "routes/agua-linda.jsx"),
  route("digital-artist", "routes/digital-artist.jsx"),
  route("handmade-wool", "routes/handmade-wool.jsx"),
  route("tattoo-artist", "routes/tattoo-artist.jsx"),
  route("shoekos", "routes/shoekos.jsx"),
  route("code", "routes/code.jsx"),
  route("tattoo2", "components/welcome/codetattoo2.jsx"),
  route("*", "routes/notfound.jsx"),
];
