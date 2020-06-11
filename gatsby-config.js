module.exports = {
  siteMetadata: {
    title: "Gatsby.js",
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
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
