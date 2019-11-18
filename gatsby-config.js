module.exports = {
  siteMetadata: {
    title: 'Christopher Ksiazak',
    siteUrl: 'https://www.ksiazak.dev',
    description: 'Personal portolio for Christopher Ksiazak'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ]
};
