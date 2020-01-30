module.exports = {
  siteMetadata: {
    title: 'Christopher Ksiazak',
    siteUrl: 'https://www.ksiazak.dev',
    description: 'Personal portolio for Christopher Ksiazak'
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-jss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Courgette`
          },
          {
            family: `Lobster`
          },
          {
            family: `Monda`
          },
          {
            family: `Permanent+Marker`
          },
          {
            family: `Rubik`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Christopher Ksiazak',
        short_name: 'Chris Ksiazak',
        start_url: '/',
        background_color: '#1C1F33',
        theme_color: '#ABA8B2',
        display: 'browser',
        icon: 'src/images/icon.png'
      }
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154417992-1',
        anonymize: true,
        head: false
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ]
};
