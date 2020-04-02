export const projects = [
  {
    title: 'SwagDragon (WIP)',
    url: '',
    githubLink:
      '',
    description: [
      'SwagDragon is a drag and drop store builder that allows you to create your own store and products without needing to keep anything in stock. We accomplish this by hooking into a drop shipping service so that the product you create is only made when someone orders it.', "This product is still a work in progress, but I'm working with 4 other developers and a UI expert in developing this application. As of right now, I've created most of the back end using Nodejs/express, and a few pages using Nextjs and Redux. We're looking at a completion around the end of May."
    ],
    technologies: ['Nextjs', 'Redux', 'Nodejs/express', 'JWT', 'knexjs'],
    imgurl: 'https://i.imgur.com/Tgif0Kq.jpg?1'
  },
  {
    title: 'Ksiazak.dev',
    url: 'https://ksiazak.dev',
    githubLink: 'https://github.com/cksiazak/ksiazak.dev',
    description: [
      'Ksiazak.dev is my personal portfolio page. Version 2.0 is built using Gatsby, has full SEO, and is completely responsive. Stylized with JSS.'
    ],
    technologies: ['Gatsbyjs', 'CSS-in-JS', 'SEO'],
    imgurl: 'https://i.imgur.com/CeK2lxH.png?1'
  },
  {
    title: 'AirBnB Optimal Pricing API',
    url: 'https://optimal-airbnb-pricing-api.herokuapp.com/',
    githubLink: 'https://github.com/Build-Week-AirBnB-Optimal-Price/Backend',
    description: [
      'For this project, I was the sole back end developer. Here, I created as server using Node, then used Knex (SQL query builder) to migrate and seed the database, and a combination of Heroku and PostgreSQL to host the server and database. It features JWT authentication and bcrypt for hashing passwords.',
      'I worked with both the Front End and Data Science teams to ensure the data is processed and parsed without issue. As I am experienced in React, I also assisted the front end team in debugging any issues with their application.'
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
      'SongSight allows you to select from a list of songs, save that song, or return similar songs based on dance-ability, key, and other metrics.',
      'Here, I served as the Front End Architect and lead group discussions on planning the application layout and features. I worked with 3 other Front End Developers, our Back End Team, and the Data Science in completing this project. I used React, Router, and Redux.'
    ],
    technologies: ['Reactjs', 'React-Router', 'React-Redux', 'Grommet'],
    imgurl: 'https://i.imgur.com/W5CAuFH.jpg'
  }
];
