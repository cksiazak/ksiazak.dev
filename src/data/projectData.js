export const projects = [
  {
    title: 'Ksiazak.dev',
    url: 'https://ksiazak.dev',
    githubLink: 'https://github.com/cksiazak/ksiazak.dev',
    description: [
      "This is my portfolio page (the one that you're currently on), version 2. It is built using Gatsby, has full SEO, and is completely responsive. Stylized with JSS.",
      'In the future, I plan on connecting a headless CMS and querying it using GraphQL.'
    ],
    technologies: ['Gatsbyjs', 'CSS-in-JS', 'SEO', 'GSAP'],
    imgurl: 'https://i.imgur.com/CeK2lxH.png?1'
  },
  {
    title: 'AirBnB Optimal Pricing API',
    url: 'https://optimal-airbnb-pricing-api.herokuapp.com/',
    githubLink: 'https://github.com/Build-Week-AirBnB-Optimal-Price/Backend',
    description: [
      'For this project, I am the sole back end developer. Here, I used expressjs (Node) for my server, Knex (SQL query builder) to migrate and seed the database, and PostgreSQL. It is hosted on Heroku, features JWT authentication and bcrypt for hashing passwords.',
      "I've worked with both the Front End and Data Science teams to ensure the data is processed and parsed without issue. As I am experienced in React, I assisted the front end team in debugging any issues."
    ],
    technologies: ['Nodejs', 'PostgreSQL', 'JWT', 'bcrypt', 'Knex', 'Jest'],
    imgurl: 'https://i.imgur.com/UrRiOHS.jpg'
  },
  {
    title: 'SongSight',
    url: 'https://song-suggester-bw.netlify.com/',
    githubLink:
      'https://github.com/Build-Week-Spotify-Song-Suggester-PT/front-end-react',
    description: [
      "SongSight allows you to select from a list of songs, save that song, or return similar songs based on danceability, key, and other metrics from our Data Science team's server.",
      'Here, I searved as the Front End Architect and lead group discussions on planning the application layout and features. I worked with 3 other Front End Developers, our Back End Team, and the Data Science in completing this project.'
    ],
    technologies: ['Reactjs', 'React-Router', 'React-Redux', 'Grommet'],
    imgurl: 'https://i.imgur.com/W5CAuFH.jpg'
  }
];
