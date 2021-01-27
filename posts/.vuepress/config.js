module.exports = {
  title: "无常殿公告板",
  description: "这里有小司无常发布的所有公告",
  theme: "yuu",
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
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-188220645-1",
      },
    ],
  ],
};
