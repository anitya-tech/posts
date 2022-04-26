module.exports = {
  title: "无常殿公告板",
  description: "这里有无常殿发布的所有公告",
  theme: "yuu",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      defaultColorTheme: "red",
      disableThemeIgnore: true,
      labels: {
        darkTheme: "开启暗色模式",
      },
    },
  },
  plugins: {
    "@vuepress/google-analytics": {
      ga: "UA-188220645-1",
    },
    sitemap: {
      hostname: require("../../package.json").homepage,
      exclude: ["/404.html"],
    },
  },
};
