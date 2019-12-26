export const projects = [
  {
    title: 'Ksiazak.dev',
    url: 'https://ksiazak.dev',
    githubLink: 'https://github.com/cksiazak/ksiazak.dev',
    description: [
      "This is my portfolio page (the one that you're currently on.) The front end is built using Gatsby.js and (S)CSS and  is fully responsive.",
      'In the future, I planning on setting up a CMS and query it using graphQL.'
    ],
    technologies: ['Gatsby.js', '(S)CSS'],
    imgurl: 'https://i.imgur.com/a5kUeLM.jpg'
  },
  {
    title: 'AirBnB Optimal Pricing API (WIP)',
    url: 'https://optimal-airbnb-pricing-api.herokuapp.com/',
    githubLink: 'https://github.com/Build-Week-AirBnB-Optimal-Price/Backend',
    description: [
      "This is the back end portion of the AirBnB Optimal Pricing application. Our application allows you to query our data science team's flask app for the best optimal price in Berlin, as well as save properties to their account. This is done using historical data, along with neighborhoods, zip codes, and other parameters.",
      'I am the sole back end developer for this api, doing both the routing and the database design. This is currently a work in progress.'
    ],
    technologies: ['Nodejs', 'PostgresQL', 'JWT', 'bcrypt', 'Knex', 'Jest'],
    imgurl: 'https://i.imgur.com/UrRiOHS.jpg'
  },
  {
    title: 'SongSight',
    url: 'https://song-suggester-bw.netlify.com/',
    githubLink:
      'https://github.com/Build-Week-Spotify-Song-Suggester-PT/front-end-react',
    description: [
      'SongSight allows you to select from a list of songs, save that song, or return similar songs based on danceability, key, and other metrics from our Data Science teams flask app.',
      'This was part 3 of our build week projects at Lambda school. I worked with 3 other React developers in planning out the application layout and function, as well as with our back-end developer and data science team.'
    ],
    technologies: ['React.js', 'React-Router', 'React-Redux', 'Grommet'],
    imgurl: 'https://i.imgur.com/W5CAuFH.jpg'
  },
  {
    title: 'SIXR',
    url: 'https://sixrfund.netlify.com/',
    githubLink: 'https://github.com/vr-funding-platform/frontend',
    description: [
      'SIXR is a project creation and investment piece. This allows you to either find a project to invest in, or create a new project for others to select from.',
      "I was paired up with another React developer, as well as a UI designer. I created the login, sign up, and project list pages to the (near) pixel perfect design that our designer had for us. Full functionality isn't complete yet, but I am planning on a rebuilding for full functionality."
    ],
    technologies: ['React.js', 'React-Router', '(S)CSS'],
    imgurl: 'https://i.imgur.com/tThRGFc.jpg'
  },
  {
    title: 'DevDesk',
    url: 'https://pt7-devdesk-queue.github.io/devdesk-queue/index.html',
    githubLink: 'https://github.com/pt7-devdesk-queue/devdesk-queue',
    description: [
      'This is the marketing page for DevDesk. This was our first build week project utilizing HTML, CSS (with LESS), and vanilla Javascript.',
      'I worked with another front-end developer, and I created the Home and Solutions pages.'
    ],
    technologies: ['HTML', 'Javascript', 'CSS (LESS)'],
    imgurl: 'https://i.imgur.com/A130nRb.jpg'
  }
];
