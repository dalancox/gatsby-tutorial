module.exports = {
  siteMetadata: {
    title: `Pura`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `wall-diffuser`,
        path: `${__dirname}/content/wall-diffuser`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `car-diffuser`,
        path: `${__dirname}/content/car-diffuser`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
