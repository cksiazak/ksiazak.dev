module.exports = {
  siteMetadata: {
    title: "Christopher Ksiazak",
    siteUrl: "https://www.ksiazak.dev",
    description: "Personal portolio for Christopher Ksiazak"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        selector: "[data-reveal]"
      }
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en"
      }
    }
  ]
};
