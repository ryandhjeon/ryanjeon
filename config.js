const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://ryanjeon.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  siteMetadata: {
    title: 'ryan jeon portfolio',
    description: '',
    docsLocation: 'https://github.com/ryandhjeon/tree/master/content',
    // favicon: 'favicon.ico',
  },
  header: {
    logo: '/src/components/images/logo.svg',
    logoLink: 'https://ryanjeon.com',
    title:
      'RYAN JEON',
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
    links: [{ text: '', link: '' }],
  },
  sidebar: {
    image:
      "<div class='sidebarImage image'><img src='src/components/images/memoji_black.jpeg'/></div>",
    title:
      "<a href='/'>Ryan D. Jeon</a></div>",
    subtitle:
      "Ph.D. student at Bowling Green State University.",
    about: [{text: 'About', link: '/' }],
    forcedNavOrder: [
      '/projects', // add trailing slash if enabled above
      '/ml',
    ],
    collapsedNav: [],
    github: [{text: 'GitHub', link: 'https://www.github.com/ryandhjeon/' }],
    linkedin: [{text: 'LinkedIn', link: 'https://www.linkedin.com/in/ryandhjeon/' }],
    email: [{text: 'Email', link: 'mailto:ryandhjeon@gmail.com' }],
    frontline: false,
    ignoreIndex: true,
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
