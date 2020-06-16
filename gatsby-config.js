module.exports = {
  siteMetadata: {
    title: "Gatsby.js",
    description: "This is page description - tutorial from gatsby doc made by Daniel Gola - Codetain 2020",
    author: "Daniel Gola",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Russo One",
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },

    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
  ],
};
