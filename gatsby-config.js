module.exports = {
  siteMetadata: {
    title: "Inspire",
  },
  plugins: [
    // Your other plugins...
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
  ],
};
