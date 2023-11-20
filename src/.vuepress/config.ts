import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/code-notes/",

  lang: "zh-CN",
  title: "code notes",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
